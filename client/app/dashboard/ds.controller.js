/*global angular, console*/
(function () {
	/*"use strict" to indicate that the code should be executed in "strict mode"*/
	'use strict';
    angular
        .module('surveyApp.dashboard')
        .controller('dsController', dsController);
    /*ngInject*/
    dsController.$inject = ['$scope', '$http', '$window', 'survey', '$state', 'result'];
    /*Used named functions instead of passing an anonymous function in as a callback.*/
    function dsController($scope, $http, $window, survey, $state, result) {
        var vm = this;
	    vm.onloadFun = function (value) {
		    survey.getsurvey().then(
				function (result) {
				//	alert("Angularjs call function on page load");
					console.log(result);
					vm.survey = result.items;
					
				},
				function (result) {
					console.log("reject", result);
				}
			);
            //RETRIEVE VALUE
            vm.name = $window.sessionStorage.getItem("SavedString");
			console.log(vm.name); 
			$state.transitionTo('table');
		};
	} 
})();