const {
  authenticate
} = require('@feathersjs/authentication').hooks;
const axios = require('axios');

module.exports = {
  before: {
    all: [],
    find: [async context => {
      let access_token;
      try {
        const token = await context.app.service('twitch').get(0);
        access_token = token.access_token;
      } catch (err) {
        const res = await axios.post('https://id.twitch.tv/oauth2/token', {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          client_id: context.app.settings.ttv_client_id,
          client_secret: context.app.settings.ttv_client_secret,
          grant_type: 'client_credentials'
        });
        context.app.service('twitch').create({access_token: res.data.access_token});
        access_token = res.data.access_token;
      }
      const final = await axios.get('https://api.twitch.tv/helix/streams?user_login=donovv', {
        headers: {
          'Client-Id': context.app.settings.ttv_client_id,
          'Authorization': `Bearer ${access_token}`
        }
      });
      context.params.stream = final.data;
      return context;
    }],
    get: [],
    create: [authenticate('jwt')],
    update: [authenticate('jwt')],
    patch: [authenticate('jwt')],
    remove: []
  },

  after: {
    all: [],
    find: [context => { 
      context.result = [];
      context.result = context.params.stream.data;
      return context;
    }],
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
