'use strict';

angular.module('myApp.register', ['ui.router'])

    .config(function ($stateProvider) {
        $stateProvider.state('register', {
            url: '/register',
            templateUrl: 'register/register.html',
            controller: 'RegisterCtrl'
        });
    })

    .controller('RegisterCtrl', function ($scope) {
        $scope.errors = {
            'required': 'This field is required',
            'email': 'The email address is invalid',
            'match': 'Passwords do not match'
        };
        $scope.type = 1;
        $scope.loading = false;
        $scope.validate = function() {
            $scope.$broadcast('show-errors-check-validity');

            if($scope.registerForm.$valid)
            {
                $scope.loading = true;
            }
        };



    });


