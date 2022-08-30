<!-- Header -->
<br/><br/>
<h1 align="center">ez-ip</h1>
  <p align="center">
    Cross-platform dependency-free IP assignment module
    <br />
    <br />
    <a href="https://github.com/SanjaySunil/ez-ip/issues">Report Bug</a>
    ·
    <a href="https://github.com/SanjaySunil/ez-ip/issues">Request Feature</a>
  </p>
</h1>
<br/><br/>

<!-- Description -->
## What's ez-ip?

[ez-ip]() is a cross-platform dependency free ip-assignment module. With ez-ip, you can easily configure network interfaces in your own projects.

<!-- Install -->
## Install
```sh
$ npm install ez-ip
```

## Usage

### [`examples/linux.js`](./examples/linux.js)

```js
const interfaces = require("ez-ip");

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
```

### [`examples/windows.js`](./examples/windows.js)

```js
const interfaces = require("../src/index");

// This interface has a static IP
const Ethernet = {
  name: "Ethernet",
  ip_address: "192.168.1.99",
  subnet_mask: "255.255.255.0",
  gateway: "192.168.1.1",
  dns_server: "8.8.8.8",
  alternate_dns_server: "8.8.4.4",
};

interfaces.set([Ethernet]);
```

<!-- License -->
## License

Copyright © 2022 Sanjay Sunil (sanjaysunil@protonmail.com)

Distributed under the MIT License. See `LICENSE` for more information.
