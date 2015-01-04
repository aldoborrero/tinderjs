(function() {

  'use strict';

  angular.module('tjsApp')
    .config(function ($stateProvider) {
      $stateProvider
        .state('welcome', {
          url: '/',
          templateUrl: 'app/welcome/welcome.html',
          controller: 'WelcomeCtrl'
        });
    });

}());
