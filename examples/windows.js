const ip_assignment = require("../src/index");

// This interface has a static IP
const Ethernet = {
  name: "Ethernet",
  ip_address: "192.168.1.99",
  subnet_mask: "24",
  gateway: "192.168.1.1",
  dns_server: "8.8.8.8",
  alternate_dns_server: "8.8.4.4",
};

ip_assignment.set([Ethernet]);
