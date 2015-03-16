'use strict';

/**
 * @ngdoc overview
 * @name codeEvalApp
 * @description
 * # codeEvalApp
 *
 * Main module of the application.
 */
angular
  .module('codeEvalApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/fizzbuzz', {
        templateUrl: 'views/fizzbuzz.html',
        controller: 'FizzbuzzCtrl'
      })
      .when('/palindrome', {
        templateUrl: 'views/palindrome.html',
        controller: 'PalindromeCtrl'
      })
      .otherwise({
        redirectTo: '/palindrome'
      });
  });
