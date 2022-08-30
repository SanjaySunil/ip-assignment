const ip_assignment = require("../src/index");

// Windows: Ethernet, Linux: eth0
// Subnet mask: 24 == 255.255.255.0

// Static eth0
const eth0 = {
  name: "eth0",
  ip_address: "192.168.1.172",
  subnet_mask: "24",
  gateway: "192.168.1.1",
  dns_server: "8.8.8.8",
  alternate_dns_server: "8.8.4.4",
}

// DHCP wlan
const wlan0 = {
  name: "wlan0",
}

ip_assignment.set([eth0, wlan0])

