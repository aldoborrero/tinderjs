(function () {

  'use strict';

  var controller = require('./thing.controller'),
    errors = require('./components/errors'),
    express = require('express'),
    favicon = require('serve-favicon'),
    morgan = require('morgan'),
    compression = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    cookieParser = require('cookie-parser'),
    errorHandler = require('errorhandler'),
    path = require('path'),
    config = require(__base + 'config/environment'),
    vhost = require('vhost'),
    env = process.env.NODE_ENV;

  module.exports = function (app) {

    var END_POINT = 'tinderjs.dev',
      tinderjsVhost = express();
    tinderjsVhost.set('views', './server/views');
    tinderjsVhost.engine('html', require('ejs').renderFile);
    tinderjsVhost.set('view engine', 'html');
    tinderjsVhost.use(compression());
    tinderjsVhost.use(bodyParser.urlencoded({extended: false}));
    tinderjsVhost.use(bodyParser.json());
    tinderjsVhost.use(methodOverride());
    tinderjsVhost.use(cookieParser());

    if ('production' === env) {
      tinderjsVhost.use(favicon(path.join(config.root, 'public', 'favicon.ico')));
      tinderjsVhost.use(express.static(path.join(config.root, 'public')));
      tinderjsVhost.set('appPath', config.root + '/public');
      tinderjsVhost.use(morgan('dev'));
    }

    if ('development' === env || 'test' === env) {
      tinderjsVhost.use(require('connect-livereload')());
      tinderjsVhost.use(express.static(path.join(config.root, '.tmp')));
      tinderjsVhost.use(express.static(path.join(config.root, 'client')));
      tinderjsVhost.set('appPath', 'client');
      tinderjsVhost.use(morgan('dev'));
      tinderjsVhost.use(errorHandler()); // Error handler - has to be last
    }

    // All undefined asset or api routes should return a 404
    tinderjsVhost.route('/:url(api|auth|components|app|bower_components|assets)/*')
      .get(errors[404]);

    // All other routes should redirect to the index.html
    tinderjsVhost.route('/*')
      .get(function (req, res) {
        res.sendfile(tinderjsVhost.get('appPath') + '/index.html');
      });

    app.use(vhost(END_POINT, tinderjsVhost));
    console.log('Registered ' + END_POINT + ' vhost!');

  };

}());
