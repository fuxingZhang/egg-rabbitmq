'use strict';

const assert = require('assert');
const amqp = require('amqplib');

module.exports = app => {
  app.addSingleton('rabbitmq', createOneClient);
};

async function createOneClient(config, app) {
  const url = config.url;
  assert(url, `[egg-rabbitmq] 'url: ${url}' is required on config`);

  app.coreLogger.info('[egg-rabbitmq] connecting %s', url);

  const conn = await amqp.connect(url);
  process.once('SIGINT', conn.close.bind(conn));
  const ch = await conn.createChannel();

  app.beforeStart(async () => {
    await ch.assertQueue('test', { durable: false });
    app.coreLogger.info('[egg-rabbitmq] init instance success');
  });

  return ch;
}
