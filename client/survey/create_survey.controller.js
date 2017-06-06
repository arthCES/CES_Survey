/*global angular, console*/
(function () {
	/*"use strict" to indicate that the code should be executed in "strict mode"*/
	'use strict';
    angular
        .module('surveyApp')
        .controller('CreatesurveyController', CreatesurveyController);
    /*ngInject*/
    CreatesurveyController.$inject = ['$scope', '$http', '$window', 'survey', '$state', 'getLocalStorage'];
    /*Used named functions instead of passing an anonymous function in as a callback.*/
    function CreatesurveyController($scope, $http, $window, survey, $state, getLocalStorage) {
        var vm = this; 
		//Read the Survey List from LocalStorage   
		vm.createdSurvey = getLocalStorage.getSurvey(); 
		//Count the Survey List
		vm.count =  vm.createdSurvey.length;  
        vm.Team = {
            Team01 : {team : "Admin"},
            Team02 : {team : "Sales"},
            Team03 : {team : "All"}
        };
        vm.name = $window.sessionStorage.getItem("SavedString");
	    console.log(vm.name); 
		//Add survey using angularJS push method
		vm.submit = function () {  
            vm.createdSurvey.push({ 'topic': vm.topic, 'survey': vm.survey, 'selectedTeam': vm.selectedTeam, 'date' : vm.date });  
            getLocalStorage.updateSurvey(vm.createdSurvey);  
            vm.topic = '';  
            vm.survey = '';  
            vm.selectedTeam = ''; 
			vm.date  = ''; 
            vm.count = vm.createdSurvey.length;  
        }; 
		//Delete survey using angularJS splice method
		vm.deleteSurvey = function (sur) {  
            vm.createdSurvey.splice(vm.createdSurvey.indexOf(sur), 1);  
            getLocalStorage.updateSurvey(vm.createdSurvey);  
            vm.count = vm.createdSurvey.length;  
        };  
    }
})();