'use strict';

exports.rabbitmq = {
  enable: true,
  client: {
    url: 'amqp://guest:guest@localhost',
  },
  app: true,
  agent: false,
};

exports.keys = 'zfx';
