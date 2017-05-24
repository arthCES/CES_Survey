/*global angular, console*/
(function () {
	/*"use strict" to indicate that the code should be executed in "strict mode"*/
	'use strict';
    angular
        .module('surveyApp')
        .controller('dsController', dsController);
    /*ngInject*/
    dsController.$inject = ['$scope', '$http', '$window', 'survey', '$state'];
    /*Used named functions instead of passing an anonymous function in as a callback.*/
    function dsController($scope, $http, $window, survey, $state) {
        var vm = this;
	    vm.onloadFun = function (value) {
		   survey.getsurvey().then(
				function (response) {
				//	alert("Angularjs call function on page load");
					console.log(response);
					vm.survey = response.items;
				},
				function (response) {
					console.log("reject", response);
				}
			);
            //RETRIEVE VALUE
            vm.name = $window.sessionStorage.getItem("SavedString");
			console.log(vm.name); 
		};
	} 
})();