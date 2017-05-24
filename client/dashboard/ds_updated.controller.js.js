/*global angular, console*/
(function () {
	/*"use strict" to indicate that the code should be executed in "strict mode"*/
	'use strict';
    angular
        .module('surveyApp')
        .controller('dsController', dsController);
    /*ngInject*/
    dsController.$inject = ['$scope', '$http', '$window', 'survey', '$state', 'NgTableParams'];
    /*Used named functions instead of passing an anonymous function in as a callback.*/
    function dsController($scope, $http, $window, survey, $state, NgTableParams) {
        var vm = this;
	
		vm.onloadFun = function (value) {

			survey.getsurvey().then(
				function (response) {
				//	alert("Angularjs call function on page load");
					console.log(response);
					vm.survey = response.items;
					
              // vm.usersTable = new NgTableParams({}, { dataset: vm.survey });
					vm.usersTable = createUsingFullOptions(response.items);
				//	 window.alert(vm.emp_id);
					 
				},
				function (response) {
					console.log("reject", response);
				}
			);
            //RETRIEVE VALUE
            vm.name = $window.sessionStorage.getItem("SavedString");
			console.log(vm.name); 
		
     	
        };
	    function createUsingFullOptions(dataset) {
            var initialParams = {
                    count: 5 // initial page size
                };
            var initialSettings = {
        // page size buttons (right set of buttons in demo)
                    counts: [],
        // determines the pager buttons (left set of buttons in demo)
                    paginationMaxBlocks: 5,
                    paginationMinBlocks: 2,
                    dataset: dataset
                };
            return new NgTableParams(initialParams, initialSettings);
        }
  
    } 
 
})();