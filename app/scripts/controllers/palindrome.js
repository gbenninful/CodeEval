'use strict';

/**
 * @ngdoc function
 * @name codeEvalApp.controller:PalindromeCtrl
 * @description
 * # PalindromeCtrl
 * Controller of the codeEvalApp
 */
angular.module('codeEvalApp')
  .controller('PalindromeCtrl', function ($scope) {

    $scope.checkPalindrome = function () {
      if ($scope.word && !/^[0-9]/g.test($scope.word)) {
        var word = $scope.word.split('');

        if ($scope.word === word.reverse().join('') && $scope.word.length !== 1) {
          console.log('true');
          $scope.result = $scope.word + ' is a palindrome'
        } else {
          console.log('false');
          $scope.result = $scope.word + ' is NOT a palindrome'
        }
      } else {
        $scope.result = "Input is not a word";
      }
    }

    $scope.fizzBuzz = function () {

    }
  });
