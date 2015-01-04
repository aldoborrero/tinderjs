(function () {

  var faker = require('faker'),
    fakerTinder = require('../utils/faker.tinder'),
    utils = require('../utils'),
    moment = require('moment');

  module.exports = {

    id: {
      status: 200,
      results: {
        _id: utils.randomId('girl'),
        bio: faker.lorem.sentences(),
        birth_date: moment(faker.date.past(30, 1996)).format(),
        gender: 1,
        name: faker.name.findName(),
        ping_time: moment(faker.date.recent()).format(),
        photos: fakerTinder.generateFakePhotos(4),
        birth_date_info: 'fuzzy birthdate active, not displaying real birth_date',
        common_friends: [],
        common_likes: [],
        common_like_count: 0,
        common_friend_count: 0,
        distance_mi: utils.randomize(1, 50)
      }
    },

    matches: {
      _id: utils.randomId(),
      from: utils.randomId('me'),
      to: utils.randomId('girl'),
      match_id: utils.randomId(),
      sent_date: moment(faker.date.recent()).format(),
      message: faker.lorem.sentences(),
      created_date: this.sent_date
    }

  };

}());
