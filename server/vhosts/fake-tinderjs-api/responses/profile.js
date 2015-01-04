(function() {

  var faker = require('faker'),
    moment = require('moment'),
    fakerTinder = require('../utils/faker.tinder'),
    utils = require('../utils');

  module.exports = {
    _id: utils.randomId('me'),
    age_filter_max: 50,
    age_filter_min: 18,
    bio: faker.lorem.sentences(),
    birth_date: moment(faker.date.past(30, 1996)).format(),
    create_date: moment(faker.date.past(1)).format(),
    facebook_id: '105022930041170',
    gender: 0,
    gender_filter: 1,
    location: null,
    name: faker.name.findName(),
    ping_time: moment(faker.date.recent()).format(),
    pos: {
      at: 1419132682513,
      lon: faker.address.longitude(),
      lat: faker.address.latitude()
    },
    photos: fakerTinder.generateFakePhotos(4),
    interested_in: [1],
    distance_filter: 70,
    discoverable: true
  };

}());
