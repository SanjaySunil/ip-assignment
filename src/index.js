"use strict";
const { exec } = require("child_process");
const process = require('process');


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
  static: (network) => {
    const platform = process.platform;

    switch(platform) {
      case 'win32':
        os_cmd(
          `netsh interface ipv4 set address name="${network.interface}" static ${network.ip_address} ${network.subnet_mask} ${network.gateway}`
        );
        os_cmd(
          `netsh interface ip set dns name="${network.interface}" static ${network.dns_server}`
        );
        os_cmd(
          `netsh interface ip add dns name="${network.interface}" ${network.alternate_dns_server} INDEX=3`
        );
      case 'linux':
        os_cmd('sudo service dhcpcd start')
        os_cmd('sudo systemctl enable dhcpcd')
    }
  },
};
