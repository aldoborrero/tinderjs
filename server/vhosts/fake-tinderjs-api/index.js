(function () {

  'use strict';

  var express = require('express'),
    vhost = require('vhost'),
    controller = require('./controller'),
    morgan = require('morgan'),
    compression = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    cookieParser = require('cookie-parser'),
    errorHandler = require('errorhandler');

  module.exports = function (app) {

    var END_POINT = 'api.gotinder.dev',
      tinderVhost = express(),
      tinderRouter = express.Router();

    tinderVhost.use(compression());
    tinderVhost.use(bodyParser.urlencoded({extended: false}));
    tinderVhost.use(bodyParser.json());
    tinderVhost.use(methodOverride());
    tinderVhost.use(cookieParser());
    tinderVhost.use(morgan('dev'));
    tinderVhost.use(errorHandler());

    tinderRouter.get('/', controller.tinder.index);
    tinderRouter.post('/auth', controller.tinder.auth);
    tinderRouter.post('/user/matches/:id', controller.tinder.user.matches);
    tinderRouter.get('/user/recs', controller.tinder.user.recs);
    tinderRouter.get('/user/:id', controller.tinder.user.info);
    tinderRouter.post('/updates', controller.tinder.updates);
    tinderRouter.get('/like/:id', controller.tinder.like);
    tinderRouter.get('/pass/:id', controller.tinder.pass);
    tinderRouter.get('/location/popular', controller.tinder.location.popular);
    tinderRouter.get('/purchase/sku', controller.tinder.purchase.sku);
    tinderRouter.post('/feed/moments', controller.tinder.feed.moments);
    tinderRouter.post('/moment/:id/like', controller.tinder.moments.like);
    tinderRouter.post('/moment/:id/pass', controller.tinder.moments.pass);
    tinderRouter.post('/profile', controller.tinder.profile);

    tinderVhost.use(function(req, res, next) {
      res.header('Access-Control-Allow-Origin', 'http://tinderjs.dev');
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
      res.header('Access-Control-Allow-Headers', 'Accept, X-Requested-With, User-Agent, os-version, app-version, platform');
      next();
    });
    tinderVhost.use('/', tinderRouter);

    app.use(vhost(END_POINT, tinderVhost));
    console.log('Registered ' + END_POINT + ' vhost!');
  }

}());
