# egg-rabbitmq

[amqplib](https://github.com/squaremo/amqp.node) plugin for Egg.js.

> NOTE: This plugin just for integrate amqplib into Egg.js, more documentation please visit http://www.squaremobius.net/amqp.node/.

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-rabbitmq.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-rabbitmq
[travis-image]: https://img.shields.io/travis/eggjs/egg-rabbitmq.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-rabbitmq
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-rabbitmq.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-rabbitmq?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-rabbitmq.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-rabbitmq
[snyk-image]: https://snyk.io/test/npm/egg-rabbitmq/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-rabbitmq
[download-image]: https://img.shields.io/npm/dm/egg-rabbitmq.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-rabbitmq

<!--
Description here.
-->

## Install

```bash
$ npm i egg-amqplib-plus --save
```

## Configuration

```js
// {app_root}/config/plugin.js
exports.rabbitmq = {
  enable: true,
  package: 'egg-amqplib-plus',
};
```
see [config/config.default.js](config/config.default.js) for more detail.

### Simple database instance

```js
// {app_root}/config/config.default.js
exports.rabbitmq = {
  client: {
    url: 'amqp://guest:guest@localhost',  
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

### Multiple database instance

```js
exports.mysql = {
  clients: {
    // clientId, access the client instance by app.rabbitmq.get('clientId')
    client1: {
      url: 'amqp://guest:guest@localhost',  
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

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)