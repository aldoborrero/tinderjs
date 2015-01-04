'use strict';

describe('Controller: MomentsCtrl', function () {

  // load the controller's module
  beforeEach(module('tjsApp'));

  var MomentsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MomentsCtrl = $controller('MomentsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
