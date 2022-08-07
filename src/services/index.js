const users = require('./users/users.service.js');
const mapleClasses = require('./maple-classes/maple-classes.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(mapleClasses);
};
