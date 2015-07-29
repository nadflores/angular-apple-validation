'use strict';

angular
  .module('appleValidation', [
    'ngRoute',
    'ui.bootstrap'
  ])
  .config([ '$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'apple/form.html',
        controller: 'AppleCtrl'
      })
      .otherwise({
        redirectTo: '/'
      })
  }])
