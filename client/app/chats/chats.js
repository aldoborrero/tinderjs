'use strict';

angular.module('tjsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('chats', {
        url: '/chats',
        templateUrl: 'app/chats/chats.html',
        controller: 'ChatsCtrl'
      });
  });