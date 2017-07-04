/*global angular, console*/
(function () {
	'use strict';
    outerGrid.$inject = [];
    function outerGrid() {
       // var vm = this;
        return {
            restrict: 'E',
            templateUrl: 'app/directive/outer-grid.html'
        };
    } 
    angular
        .module('surveyApp')
        .directive('outerGrid', outerGrid);
})();