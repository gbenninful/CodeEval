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
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/FizzBuzz', {
        templateUrl: 'views/fizzbuzz.html',
        controller: 'FizzbuzzCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
