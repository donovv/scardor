// Initializes the `twitch` service on path `/twitch`
const { Twitch } = require('./twitch.class');
const hooks = require('./twitch.hooks');

module.exports = function (app) {
  const options = {
  };

  // Initialize our service with any options it requires
  app.use('/twitch', new Twitch(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('twitch');

  service.hooks(hooks);
};
