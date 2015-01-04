(function () {

  'use strict';

  angular.module('tjsApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap',
    'restangular'
  ])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider, RestangularProvider) {
      $urlRouterProvider
        .otherwise('/');

      $locationProvider.html5Mode(true);

      RestangularProvider.setBaseUrl('http://api.gotinder.dev');
      RestangularProvider.setDefaultHeaders({
        //'User-Agent': 'Tinder Android Version 4.0.3',
        'platform': 'android',
        'app-version': 767,
        'os-version': 19,
        'Content-Type':'application/json'
      });

    });

}());
