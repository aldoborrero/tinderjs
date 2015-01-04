(function () {

  'use strict';

  angular.module('tjsApp')
    .controller('NavbarCtrl', function ($scope, $location) {
      $scope.menu = {

        left: [
          {'title': 'Explore', 'link': '/explore'},
          {'title': 'Chats', 'link': '/chats'},
          {'title': 'Moments', 'link': '/moments'}
        ],

        right: [
          {'title': 'Settings', 'link': '/settings'},
          {'title': 'Log out', 'link': '/logout'}
        ]

      };

      $scope.isCollapsed = true;

      $scope.isActive = function (route) {
        return route === $location.path();
      };
    });

}());
