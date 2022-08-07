const { authenticate } = require('@feathersjs/authentication').hooks;

const {
  hashPassword, protect
} = require('@feathersjs/authentication-local').hooks;

module.exports = {
  before: {
    all: [],
    find: [ authenticate('jwt') ],
    get: [ authenticate('jwt') ],
    create: [ hashPassword('password'), (context) => {
      context.data.privledgelevel = 'user';
    } ],
    update: [ hashPassword('password'),  authenticate('jwt'), context => {
      if (context.params.user.privledgelevel !== 'admin') context.data.privledgelevel = 'user';
    } ],
    patch: [ hashPassword('password'),  authenticate('jwt'), context => {
      if (context.params.user.privledgelevel !== 'admin') context.data.privledgelevel = 'user';
    } ],
    remove: [ authenticate('jwt'), context => {
      if (context.params.user.privledgelevel !== 'admin') throw new Error('Only Admins can do this');
    } ]
  },

  after: {
    all: [ 
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect('password')
    ],
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
