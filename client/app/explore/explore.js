(function () {

  'use strict';

  angular.module('tjsApp')
    .config(function ($stateProvider) {

      $stateProvider
        .state('explore', {
          url: '/explore',
          templateUrl: 'app/explore/explore.html',
          controller: 'ExploreCtrl'
        });

    });

}());
