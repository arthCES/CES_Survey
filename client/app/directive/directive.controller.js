/*global angular, console*/
(function () {
    /*"use strict" to indicate that the code should be executed in "strict mode"*/
    'use strict';
    angular
        .module('surveyApp')
        .controller('modalController', modalController);
    /*ngInject*/
    modalController.$inject = ['$scope'];
    /*Used named functions instead of passing an anonymous function in as a callback.*/
    function modalController($scope) {
        var vm = this;
        vm.disable = false;
        vm.show = true;
    }
})();