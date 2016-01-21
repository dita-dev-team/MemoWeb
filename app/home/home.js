'use strict';

angular.module('myApp.home', ['ui.router'])

.config(function ($stateProvider) {
        $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'home/home.html',
            controller: 'HomeCtrl'
        });
    })

.controller('HomeCtrl', [function() {

    }]);