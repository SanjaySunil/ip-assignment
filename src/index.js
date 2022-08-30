const { exec } = require("child_process");
const process = require("process");
const CONF = require("./configurations");
const fs = require("fs");
const util = require("util");
const write_file = util.promisify(fs.writeFile);

const DHCPCD_CONF_PATH = "/etc/dhcpcd.conf";

String.prototype.format =
  String.prototype.format ||
  function () {
    var str = this.toString();
    if (arguments.length) {
      var t = typeof arguments[0];
      var key;
      var args =
        "string" === t || "number" === t
          ? Array.prototype.slice.call(arguments)
          : arguments[0];

      for (key in args) {
        str = str.replace(new RegExp("\\{" + key + "\\}", "gi"), args[key]);
      }
    }
    return str;
  };

const os_cmd = (cmd) => {
  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
};

module.exports = {
  set: (interfaces) => {
    const platform = process.platform;

    switch (platform) {
      case "win32":
        interfaces.forEach((interface) => {
          os_cmd(
            `netsh interface ipv4 set address name="${interface.name}" static ${interface.ip_address} ${interface.subnet_mask} ${interface.gateway}`
          );
          os_cmd(
            `netsh interface ip set dns name="${interface.name}" static ${interface.dns_server}`
          );
          os_cmd(
            `netsh interface ip add dns name="${interface.name}" ${interface.alternate_dns_server} INDEX=3`
          );
        });

      case "linux":
        let linux_dhcpcd_conf = CONF.LINUX_DHCPCD;
        interfaces.forEach((interface) => {
          if (interface.ip_address === undefined) {
          } else {
            let linux_static_conf = CONF.LINUX_STATIC.format({
              interface: interface.name,
              ip_address: interface.ip_address,
              subnet_mask: interface.subnet_mask,
              gateway: interface.gateway,
              dns_server: interface.dns_server,
            });
            linux_dhcpcd_conf = linux_dhcpcd_conf + linux_static_conf;
          }
        });
        return write_file(DHCPCD_CONF_PATH, linux_dhcpcd_conf);
    }
  },
};
