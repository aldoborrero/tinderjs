(function () {

  var fakerTinder = require('../utils/faker.tinder');

  module.exports = {

    moments: {
      "last_activity_date": null,
      "moments": fakerTinder.generateFakeMoments(1)
    }

  };

}());
