(function () {

  'use strict';

  var _ = require('lodash'),
    auth = require('./responses/auth'),
    like = require('./responses/like'),
    pass = require('./responses/pass'),
    location = require('./responses/location'),
    purchase = require('./responses/purchase'),
    feed = require('./responses/feed'),
    user = require('./responses/user'),
    updates = require('./responses/updates'),
    profile = require('./responses/profile'),
    moment = require('./responses/moment'),
    recs = require('./responses/recs'),
    utils = require('./utils'),
    responses;

  responses = {

    index: function (req, res) {
      return res.send({message: 'This is not the real API you\'re looking for!'});
    },

    auth: function (req, res) {
      return res.json(auth);
    },

    user: {

      matches: function (req, res) {
        return res.json(user.matches);
      },

      recs: function (req, res) {
        return res.send(recs);
      },

      info: function (req, res) {
        return res.json(user.id);
      }

    },

    updates: function (req, res) {
      return res.json(updates);
    },

    like: function (req, res) {
      return res.json(like[utils.randomBoolean() ? 'mutual-like' : 'non-mutual-like']);
    },

    pass: function (req, res) {
      return res.json(pass);
    },

    feed: {

      moments: function (req, res) {
        return res.json(feed.moments);
      }

    },

    purchase: {

      sku: function (req, res) {
        return res.json(purchase.sku);
      }

    },

    location: {

      popular: function(req, res) {
        return res.json(location.popular);
      }

    },

    moments: {

      like: function(req, res) {
        return res.json(moment.like);
      },

      pass: function(req, res) {
        return res.json(moment.pass);
      }

    },

    profile: function(req, res) {
      return res.json(profile);
    }

  };

  exports.tinder = responses;

}());
