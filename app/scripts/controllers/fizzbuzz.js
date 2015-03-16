'use strict';

/**
 * @ngdoc function
 * @name codeEvalApp.controller:FizzbuzzCtrl
 * @description
 * # FizzbuzzCtrl
 * Controller of the codeEvalApp
 */
angular.module('codeEvalApp')
  .controller('FizzbuzzCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
