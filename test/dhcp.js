const ip_assignment = require("../src/index");

// Windows: Ethernet, Linux: eth0
// Subnet mask: 24 == 255.255.255.0

const eth0 = {
  interface: "eth0",
}

ip_assignment.dhcp([eth0])

