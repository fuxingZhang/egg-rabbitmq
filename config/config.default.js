'use strict';

/**
 * egg-rabbitmq default config
 * @member Config#rabbitmq
 * @property {String} url - url
 */
exports.rabbitmq = {
  // default configuration for all client
  default: {
    url: 'amqp://guest:guest@localhost:5672',
  },
  app: true,
  agent: false,

  // Single client
  // client: {
  //   url: 'amqp://guest:guest@localhost:5672',
  // },

  // Multi client
  // clients: {
  //   client1: {
  //     url: 'amqp://guest:guest@localhost:5672',
  //   },
  //   client2: {
  //     url: 'amqp://guest:guest@localhost:5672',
  //   },
  // },
};
