'use strict';

angular
  .module('appleValidation', [
    'ngRoute',
    'ui.bootstrap'
  ])
  .config([ '$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        redirectTo: '/form'
      })
      .when('/form', {
        templateUrl: 'apple/form.html',
        controller: 'AppleCtrl'
      })
  }])
