(function () {

  var _ = require('lodash'),
    faker = require('faker'),
    moment = require('moment'),
    utils = require('./index'),

    generateFakePerson = function (options) {
      options = _.defaults(options || {}, {});

      return {
        'distance_mi': utils.randomize(0, 120),
        'common_like_count': utils.randomize(0, 20),
        'common_friend_count': utils.randomize(0, 20),
        'common_likes': [], // TODO
        'common_friends': [], // TODO
        '_id': utils.randomId(),
        'bio': faker.lorem.sentences(),
        'birth_date': moment(faker.date.past(30, 1996)).format(),
        'gender': 1,
        'name': faker.name.findName(),
        'ping_time': moment(faker.date.recent()).format(),
        'photos': generateFakePhotos(5),
        'birth_date_info': 'fuzzy birthdate active, not displaying real birth_date'
      }

    },

    generateFakePersons = function (size) {
      size = size || 5;
      var persons = [];
      for (var i = 0; i < size; i++) {
        persons.push(generateFakePerson());
      }
      return persons;
    },

    generateFakePhoto = function (options) {
      options = _.defaults(options || {}, {
        main: false,
        randomId: utils.randomId(),
        extension: 'jpg'
      });

      return {
        'url': faker.image.people(640, 640),
        'processedFiles': [{
          'url': faker.image.people(640, 640),
          'height': 640,
          'width': 640
        }, {
          'url': faker.image.people(320, 320),
          'height': 320,
          'width': 320
        }, {
          'url': faker.image.people(172, 172),
          'height': 172,
          'width': 172
        }, {
          'url': faker.image.people(84, 84),
          'height': 84,
          'width': 84
        }],
        'extension': options.extension,
        'fileName': options.randomId + '.' + options.extension,
        'main': options.main,
        'ydistance_percent': 1,
        'yoffset_percent': 0,
        'xoffset_percent': 0,
        'id': options.randomId,
        'xdistance_percent': 1
      }

    },

    generateFakePhotos = function (size) {
      size = size || 5;
      var photos = [];
      for (var i = 0; i < size; i++) {
        photos.push(generateFakePhoto());
      }
      return photos;
    },

    generateFakeMoment = function (options) {
      return {
        _id: utils.randomId(),
        created_by: utils.randomId(),
        date: moment(faker.date.recent()).format(),
        media: {
          id: utils.randomId(),
          processedFiles: {
            orig: faker.image.abstract(800, 800),
            large: faker.image.abstract(640, 640),
            medium: faker.image.abstract(480, 480),
            small: faker.image.abstract(240, 240),
            thumb: faker.image.abstract(96, 96)
          }
        },
        text: faker.lorem.sentence(),
        text_attributes: {
          alignment: "",
          height: "",
          size: ""
        },
        filter: "Original"
      };
    },

    generateFakeMoments = function (size) {
      size = size || 5;
      var moments = [];
      for (var i = 0; i < size; i++) {
        moments.push(generateFakeMoment());
      }
      return moments;
    };

  module.exports = {
    generateFakePerson: generateFakePerson,
    generateFakePersons: generateFakePersons,
    generateFakePhoto: generateFakePhoto,
    generateFakePhotos: generateFakePhotos,
    generateFakeMoment: generateFakeMoment,
    generateFakeMoments: generateFakeMoments
  }

}());
