<!-- Header -->
<br/><br/>
<h1 align="center">{name}</h1>
  <p align="center">
    {description}
    <br />
    <br />
    <a href="{report_bug}">Report Bug</a>
    ·
    <a href="{request_feature}">Request Feature</a>
  </p>
</h1>
<br/><br/>

<!-- Description -->
## What's {name}?

[{name}]() {long_description}

<!-- Install -->
## Install
```sh
$ npm install {package}
```

## Usage

### [`examples/linux.js`](./examples/linux.js)

```js
const interfaces = require("ip-assignment");

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
const interfaces = require("ip-assignment");

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

Copyright © 2022 {author} ({email})

Distributed under the {license} License. See `LICENSE` for more information.
