(function () {

  'use strict';

  angular.module('tjsApp')
    .controller('WelcomeCtrl', function ($scope, $location) {

      $scope.isLogged = true;

      if ($scope.isLogged) {
        $location.url('/explore');
      }

    });

}());
