'use strict';

/**
 * @ngdoc function
 * @name codeEvalApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the codeEvalApp
 */
angular.module('codeEvalApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
