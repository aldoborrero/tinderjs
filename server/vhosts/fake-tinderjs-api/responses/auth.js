(function () {

  var faker = require('faker'),
    fakerTinder = require('../utils/faker.tinder'),
    utils = require('../utils'),
    moment = require('moment');

  module.exports = {
    token: 'f02b39aa-854e-48d1-82e5-925242f9c141',
    user: {
      _id: utils.randomId('me'),
      active_time: moment(faker.date.past(1)).format(),
      create_date: moment(faker.date.past(1)).format(),
      age_filter_max: 50,
      age_filter_min: 18,
      api_token: 'f02b39aa-854e-48d1-82e5-925242f9c141',
      bio: faker.lorem.sentences(),
      birth_date: moment(faker.date.past(30, 1996)).format(),
      distance_filter: 70,
      full_name: faker.name.findName(),
      gender: 0,
      gender_filter: 1,
      name: faker.name.firstName(),
      ping_time: moment(faker.date.recent()).format(),
      discoverable: true,
      photos: fakerTinder.generateFakePhotos(6),
      purchases: []
    },
    versions: {
      active_text: '0.0.0',
      age_filter: '2.1.0',
      matchmaker: '2.1.0',
      trending: '10.0.0',
      trending_active_text: '10.0.0'
    },
    globals: {
      friends: true,
      invite_type: 'client',
      recs_interval: 20000,
      updates_interval: 2000,
      recs_size: 40,
      matchmaker_default_message: 'I want you to meet someone. I introduced you on Tinder www.gotinder.com/app',
      share_default_text: '<style>body{color:#fff;text-align:center;font-family:HelveticaNeue;text-shadow:0 1px 1px rgba(0,0,0,0.63);}h1{font-size:24px;line-height:24px;margin:0;}p{font-size:16px;margin:8px;}</style><h1>Get a Boost</h1><p><strong>Invite friends</strong> to show up <br/><strong>even higher</strong> in recommendations.</p>',
      boost_decay: 180,
      boost_up: 7,
      boost_down: 8,
      sparks: false,
      kontagent: false,
      sparks_enabled: false,
      kontagent_enabled: false,
      mqtt: false,
      tinder_sparks: true,
      moments_interval: 30000,
      plus: false
    }
  };

}());
