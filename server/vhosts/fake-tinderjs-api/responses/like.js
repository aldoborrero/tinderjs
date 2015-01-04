(function () {

  var moment = require('moment'),
    faker = require('faker'),
    utils = require('../utils');

  module.exports = {

    'mutual-like': {
      match: {
        _id: utils.randomId(),
        closed: false,
        common_friend_count: utils.randomize(0, 10),
        common_like_count: utils.randomize(0, 20),
        created_date: moment(faker.date.past(2)).format(),
        dead: false,
        last_activity_date: moment(faker.date.recent()).format(),
        message_count: 0,
        messages: [],
        participants: [utils.randomId('me'), utils.randomId('girl')],
        pending: false,
        following: true,
        following_moments: true
      }
    },

    'non-mutual-like': {
      match: false
    }

  };

}());
