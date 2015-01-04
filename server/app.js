(function () {

  'use strict';

  // In a far, far away galaxy…
  global.__base = __dirname + '/';

  // Set default node environment to development
  process.env.NODE_ENV = process.env.NODE_ENV || 'development';

  var express = require('express'),
    config = require('./config/environment'),
    app = express(),
    server = require('http').createServer(app);

  // Let's configure express
  require('./config/express')(app);

  // Start server
  server.listen(config.port, config.ip, function () {
    console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
  });

  // Expose app
  module.exports = app;

}());
