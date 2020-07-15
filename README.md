# egg-rabbitmq

[amqplib](https://github.com/squaremo/amqp.node) plugin for Egg.js

> NOTE: This plugin just for integrate amqplib into Egg.js, more documentation please visit http://www.squaremobius.net/amqp.node/.

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/@eggplugin/rabbitmq.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@eggplugin/rabbitmq
[travis-image]: https://img.shields.io/travis/eggjs/@eggplugin/rabbitmq.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/@eggplugin/rabbitmq
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/@eggplugin/rabbitmq.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/@eggplugin/rabbitmq?branch=master
[david-image]: https://img.shields.io/david/eggjs/@eggplugin/rabbitmq.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/@eggplugin/rabbitmq
[snyk-image]: https://snyk.io/test/npm/@eggplugin/rabbitmq/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/@eggplugin/rabbitmq
[download-image]: https://img.shields.io/npm/dm/@eggplugin/rabbitmq.svg?style=flat-square
[download-url]: https://npmjs.org/package/@eggplugin/rabbitmq

## Install

```bash
$ npm i @eggplugin/rabbitmq --save
```

## Configuration

```js
// {app_root}/config/plugin.js
exports.rabbitmq = {
  enable: true,
  package: '@eggplugin/rabbitmq',
};
```
see [config/config.default.js](config/config.default.js) for more detail.

## *** Warning *** 
v2.x and v1.x are not compatible
```js
// v.1x  channel
const ch = app.rabbitmq;

// v2.x  connection and channel 
const { conn, ch } = app.rabbitmq;
```

## Usage for v2.x

### Simple instance  

#### config
```js
// {app_root}/config/config.default.js
exports.rabbitmq = {
  client: {
    url: 'amqp://guest:guest@localhost:5672',  
  },
  // load into app, default is open
  app: true,
  // load into agent, default is close
  agent: false,
};
```

#### exmaple:
```js
(async () => {
  // you can access to connection and channel using app.rabbitmq.
  const { ch, conn } = app.rabbitmq;
  // assertQueue
  await ch.assertQueue(queueName, { durable: true });
  // checkQueue
  await ch.checkQueue(queueName);
  // sendToQueue
  ch.sendToQueue(queueName, Buffer.from(msg));
  // If you want to get a channel which uses "confirmation mode"
  const confirmChannel = await conn.createConfirmChannel();
}).catch(console.error);
```

### Multiple instance

```js
exports.rabbitmq = {
  clients: {
    // clientId, access the client instance by app.rabbitmq.get('clientId')
    client1: {
      url: 'amqp://guest:guest@localhost:5672',  
    },
    client2: {
      url: 'amqp://guest:guest@xxx',  
    },
    // ...
  },
  // load into app, default is open
  app: true,
  // load into agent, default is close
  agent: false,
};
```

Usage:

```js
const { ch: ch1, conn: conn1 } = app.rabbitmq.get('client1'); 
const { ch: ch2, conn: conn2 } = app.rabbitmq.get('client2'); 
```

## Usage for v1.x

### Simple instance

```js
// {app_root}/config/config.default.js
exports.rabbitmq = {
  client: {
    url: 'amqp://guest:guest@localhost:5672',  
  },
  // load into app, default is open
  app: true,
  // load into agent, default is close
  agent: false,
};
```

Usage:

```js
(async () => {
  // you can access to simple rabbitmq instance channel using app.rabbitmq.
  const ch = app.rabbitmq; // Channel
  // assertQueue
  await ch.assertQueue(queueName, { durable: true });
  // checkQueue
  await ch.checkQueue(queueName);
  // sendToQueue
  ch.sendToQueue(queueName, Buffer.from(msg));
}).catch(console.error);
```

### Multiple instance

```js
exports.rabbitmq = {
  clients: {
    // clientId, access the client instance by app.rabbitmq.get('clientId')
    client1: {
      url: 'amqp://guest:guest@localhost:5672',  
    },
    client2: {
      url: 'amqp://guest:guest@xxx',  
    },
    // ...
  },
  // load into app, default is open
  app: true,
  // load into agent, default is close
  agent: false,
};
```

Usage:

```js
const ch1 = app.rabbitmq.get('client1'); 
const ch2 = app.rabbitmq.get('client2'); 
```

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)