(function () {

  var crypto = require('crypto'),

    randomize = function (min, max) {
      return (Math.random() * max | min);
    },

    randomBoolean = function () {
      return Math.random() < .5;
    },

    randomId = function (predefined) {
      return crypto.createHash('sha1').update(predefined || new Date().getMilliseconds().toString()).digest('hex');
    };

  module.exports = {
    randomize: randomize,
    randomBoolean: randomBoolean,
    randomId: randomId
  }

}());
