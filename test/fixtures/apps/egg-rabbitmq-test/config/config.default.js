'use strict';

// exports.rabbitmq = {
//   enable: true,
//   package: 'egg-rabbitmq',
// };
exports.rabbitmq = {
  enable: true,
  client: {
    url: 'amqp://guest:guest@localhost',
  },
  // load into app, default is open
  app: true,
  // load into agent, default is close
  agent: false,
};

exports.keys = 'zfx';
