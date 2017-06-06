/*global angular, console*/
(function () {
	'use strict';
    innerGrid.$inject = [];
    function innerGrid() {
       // var vm = this;
        return {
            restrict: 'E',
            templateUrl: 'app/directive/inner-grid.html'
        };
    } 
    angular
        .module('surveyApp')
        .directive('innerGrid', innerGrid);
})();