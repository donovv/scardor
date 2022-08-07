const { authenticate } = require('@feathersjs/authentication').hooks;
// authenticate('jwt')
module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [authenticate('jwt'), context => {
      if (context.params.user.privledgelevel !== 'admin') throw new Error('Only Admins can do this');
    }],
    update: [authenticate('jwt'), context => {
      if (context.params.user.privledgelevel !== 'admin') throw new Error('Only Admins can do this');
    }],
    patch: [authenticate('jwt'), context => {
      if (context.params.user.privledgelevel !== 'admin') throw new Error('Only Admins can do this');
    }],
    remove: [authenticate('jwt'), context => {
      if (context.params.user.privledgelevel !== 'admin') throw new Error('Only Admins can do this');
    }]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
