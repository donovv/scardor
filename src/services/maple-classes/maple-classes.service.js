// Initializes the `MapleClasses` service on path `/maple-classes`
const { MapleClasses } = require('./maple-classes.class');
const createModel = require('../../models/maple-classes.model');
const hooks = require('./maple-classes.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/maple-classes', new MapleClasses(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('maple-classes');

  service.hooks(hooks);
};
