'use strict';

angular.module('openshiftBasicApp', ['openshiftBasicApp.auth', 'openshiftBasicApp.admin',
    'openshiftBasicApp.constants', 'ngCookies', 'ngResource', 'ngSanitize', 'btford.socket-io',
    'ui.router', 'ui.bootstrap', 'validation.match'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
