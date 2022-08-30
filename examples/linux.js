const interfaces = require("../src/index");

// This interface has a static IP
const eth0 = {
  name: "eth0",
  ip_address: "192.168.1.98",
  subnet_mask: "24",
  gateway: "192.168.1.1",
  dns_server: "8.8.8.8",
  alternate_dns_server: "8.8.4.4",
};

// This interface has a DHCP IP
const wlan0 = {
  name: "wlan0",
};

interfaces.set([eth0, wlan0]);
