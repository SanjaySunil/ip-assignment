const ipv4 = require("../src/index");

// Windows: Ethernet, Linux: eth0
// Subnet mask: 24 == 255.255.255.0

ipv4.dhcp();
