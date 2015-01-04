(function() {

  var faker = require('faker'),
    fakerTinder = require('../utils/faker.tinder');

  module.exports = {
    "status": 200,
    "results": fakerTinder.generateFakePersons(40)
  };

}());
