const assert = require('assert');
const app = require('../../src/app');

describe('\'twitch\' service', () => {
  it('registered the service', () => {
    const service = app.service('twitch');

    assert.ok(service, 'Registered the service');
  });
});
