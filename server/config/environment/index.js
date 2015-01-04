(function () {

  'use strict';

  var path = require('path'),
    _ = require('lodash');

  var config = {

    env: process.env.NODE_ENV,

    root: path.normalize(__dirname + '/../../..'),

    port: process.env.PORT || 80

  };

  module.exports = _.merge(
    config,
    require('./' + process.env.NODE_ENV + '.js') || {}
  );

}());
