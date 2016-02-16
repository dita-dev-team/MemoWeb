'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ui.router',
    'directives.inputValidator',
    'myApp.home',
    'myApp.register',
    'myApp.signin',
    'myApp.version'
]).
    config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
    });
