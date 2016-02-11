'use strict';

angular.module('myApp.signin', ['ui.router'])

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

    .controller('SignCtrl', function ($scope) {
        $scope.errors = {
            'required': 'This field is required'
        };
        $scope.loading = false;
        $scope.validate = function (signinForm) {
            $scope.$broadcast('show-errors-check-validity');

            if (signinForm.$valid)
            {
                $scope.loading = true;
            }
        }
    });
