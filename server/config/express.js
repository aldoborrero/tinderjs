(function () {

  'use strict';

  var _ = require('lodash'),
    config = require('./environment');

  module.exports = function (app) {

    _.forEach(config.vhosts, function (vhost) {
      require(__base + 'vhosts/' + vhost)(app);
    });

  };

}());
