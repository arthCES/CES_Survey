/*global angular, console*/
(function () {
	/*"use strict" to indicate that the code should be executed in "strict mode"*/
	'use strict';
    angular
        .module('surveyApp')
        .controller('SurveyController', SurveyController);
    /*ngInject*/
    SurveyController.$inject = ['$scope', '$http', '$window', 'user', '$state'];
    /*Used named functions instead of passing an anonymous function in as a callback.*/
    function SurveyController($scope, $http, $window, user, $state) {
        var vm = this; //controllerAs with vm
        vm.emp_id = null;
        vm.password = null;

        vm.submit = function (value) {

			user.getUser().then(
				function (response) {
					console.log(response);
					// window.alert(vm.emp_id);
					$state.go('dashboard');
					 
				},
				function (response) {
					console.log("reject", response);
				}
			);
			$window.sessionStorage.setItem("SavedString", vm.emp_id);
        };
    }
})();