'use strict';

angular.module('openshiftBasicApp.auth', ['openshiftBasicApp.constants', 'openshiftBasicApp.util',
    'ngCookies', 'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
