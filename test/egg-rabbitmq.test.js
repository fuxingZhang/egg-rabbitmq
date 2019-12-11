'use strict';

const mock = require('egg-mock');

describe('test/egg-rabbitmq.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/egg-rabbitmq-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET rabbitmq success', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, rabbitmq')
      .expect(200);
  });
});
