(function () {

  'use strict';

  angular.module('tjsApp')

    .controller('ExploreCtrl', function ($scope, Restangular) {

      Restangular.all('user/recs').customGET().then(function(recomendations) {
        console.log(recomendations);
      });

    });

}());
