'use strict';

const rabbitmq = require('./lib/rabbitmq');

module.exports = app => {
  if (app.config.rabbitmq.app) rabbitmq(app);
};
