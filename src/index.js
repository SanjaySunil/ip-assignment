"use strict";
const { exec } = require("child_process");
const process = require('process');

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
          `netsh interface ipv4 set address name="${network.name}" static ${network.ip_address} ${network.subnet_mask} ${network.gateway}`
        );
        os_cmd(
          `netsh interface ip set dns name="${network.name}" static ${network.dns_server}`
        );
        os_cmd(
          `netsh interface ip add dns name="${network.name}" ${network.alternate_dns_server} INDEX=3`
        );
      case 'linux':
        os_cmd('sudo service dhcpcd status')
        os_cmd('sudo service dhcpcd start')
        os_cmd('sudo systemctl enable dhcpcd')
    }
  },
};
