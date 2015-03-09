'use strict';

/**
 * @ngdoc function
 * @name codeEvalApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the codeEvalApp
 */
angular.module('codeEvalApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
