'use strict';

angular.module('tjsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('moments', {
        url: '/moments',
        templateUrl: 'app/moments/moments.html',
        controller: 'MomentsCtrl'
      });
  });