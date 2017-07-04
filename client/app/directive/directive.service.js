/*global angular, console*/
(function () {
	'use strict';
    confirmPopupText.$inject = ['$uibModal', '$compile', '$parse'];
    function confirmPopupText($modal, $compile, $parse) {
        var vm = this;
        return {
            restrict: 'A',
            controller: "modalController",
            controllerAs: "vm",
            link: function (scope, elem, attrs) {
                /* get reference of ngClick func */
                var model = $parse(attrs.ngClick);
				elem.prop('ng-click', null).off('click');
                elem.bind('click', function (e) {
                    /* stop propagation so that original ngClick will not invoked */
                    e.stopImmediatePropagation();
                    console.log('Clicked');
                    $modal.open({
                        template: '<div class="modal-header">' + attrs.confirmPopupHeader + '</div>' +
                                   '<div class="modal-body">' + attrs.confirmPopupText + '</div>' +
                                   '<button class="btn btn-warning" ng-click="cancel()">Thank You</button>',
                        controller: function ($scope, $uibModalInstance) {
                            $scope.cancel = function () {
                                $uibModalInstance.dismiss('vm.cancel');
					        };
                        }
                    });
                });
            }
        };
    } 
    angular
        .module('surveyApp')
        .directive('confirmPopupText', confirmPopupText);
})();