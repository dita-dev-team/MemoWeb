'use strict';

angular.module('directives.inputValidator', [])

    .directive('showErrors',  function() {
        return {
            restrict: 'A',
            require: '^form',
            link: function(scope, el, attrs, formCtrl) {
                var inputEl = el[0].querySelector("[name]"); // find the box element which has the name attribute
                var inputNgEl = angular.element(inputEl); // convert the native text box element to an angular element
                var inputName = inputNgEl.attr('name'); // get the name on the text box

                // only apply the has-error class after the user leaves the text box
                var blurred = false;
                inputNgEl.bind('blur', function() {
                    blurred = true;
                    el.toggleClass('has-error', formCtrl[inputName].$invalid);
                });

                scope.$watch(function() {
                    return formCtrl[inputName].$invalid
                }, function(invalid) {
                    if(!blurred && invalid)
                    {
                        return;
                    }
                    el.toggleClass('has-error', invalid);
                });

                scope.$on('show-errors-check-validity', function() {
                    el.toggleClass('has-error', formCtrl[inputName].$invalid)
                });
            }
        }
    })

    .directive('compareTo', function() {
        return {
            restrict: 'A',
            require: 'ngModel',
            scope: {
                otherModelValue: '=compareTo'
            },
            link: function(scope, el, attrs, ngModel) {
                if(!ngModel)
                {
                    return;
                }

                ngModel.$validators.compareTo = function(modelValue) {
                    return modelValue == scope.otherModelValue;
                };

                scope.$watch('otherModelValue', function() {
                    ngModel.$validate();
                });
            }
        }
    });