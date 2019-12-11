'use strict';

const rabbitmq = require('./lib/rabbitmq');

module.exports = agent => {
  if (agent.config.rabbitmq.agent) rabbitmq(agent);
};
