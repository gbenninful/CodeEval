'use strict';

describe('Controller: FizzbuzzCtrl', function () {

  // load the controller's module
  beforeEach(module('codeEvalApp'));

  var FizzbuzzCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FizzbuzzCtrl = $controller('FizzbuzzCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
