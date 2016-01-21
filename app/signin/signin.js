'use strict';

angular.module('myApp.signin', ['darthwade.dwLoading', 'ui.router'])

    .config(function ($stateProvider) {
        $stateProvider.state('signin', {
            url: '/signin',
            templateUrl: 'signin/signin.html',
            controller: 'SignCtrl'
        });

        $stateProvider.state('forgot', {
            url: '/forgot',
            templateUrl: 'signin/forgotpassword.html',
            controller: 'SignCtrl'
        });
    })

    .controller('SignCtrl', function($scope, $loading) {
        $scope.errors = {
            'required': 'This field is required'
        };

        $scope.validate = function() {
            $scope.$broadcast('show-errors-check-validity');

            if($scope.signinForm.$valid)
            {
                $loading.start('signin');
            }
        }
    });
