const assert = require('assert');
const app = require('../../src/app');

describe('\'MapleClasses\' service', () => {
  it('registered the service', () => {
    const service = app.service('maple-classes');

    assert.ok(service, 'Registered the service');
  });
});
