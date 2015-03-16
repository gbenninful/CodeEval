'use strict';

describe('Controller: PalindromeCtrl', function () {

  // load the controller's module
  beforeEach(module('codeEvalApp'));

  var PalindromeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PalindromeCtrl = $controller('PalindromeCtrl', {
      $scope: scope
    });
  }));

  it('should define a checkPalindrome function', function () {
    expect(scope.checkPalindrome).toBeDefined();
  });

});
