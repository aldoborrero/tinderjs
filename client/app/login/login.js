(function() {

  'use strict';

  angular.module('tjsApp')
    .config(function ($stateProvider) {
      $stateProvider
        .state('login', {
          url: '/login',
          templateUrl: 'app/login/login.html',
          controller: 'LoginCtrl'
        });
    });

}());
