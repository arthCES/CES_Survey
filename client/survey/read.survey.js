/*global angular, console*/
(function () {
    /*"use strict" to indicate that the code should be executed in "strict mode"*/
    'use strict';
    angular
        .module('surveyApp')
        .controller('ReadSurveyController', ReadSurveyController);
    /*ngInject*/
    ReadSurveyController.$inject = ['$scope', '$http', '$window', 'survey', '$state', 'getLocalStorage'];
    /*Used named functions instead of passing an anonymous function in as a callback.*/
    function ReadSurveyController($scope, $http, $window, survey, $state, getLocalStorage) {
        var vm = this;
        //Read the Survey List from LocalStorage   
        vm.createdSurvey = getLocalStorage.getSurvey();
        //Count the Survey List
        vm.count = vm.createdSurvey.length;
        vm.getLocalStorage = function (value) {

            vm.createdSurvey.push({
                'topic': vm.topic,
                'survey': vm.survey,
                'selectedTeam': vm.selectedTeam,
                'date': vm.date
            });
            getLocalStorage.updateSurvey(vm.createdSurvey);
            vm.topic = '';
            vm.survey = '';
            vm.selectedTeam = '';
            vm.date = '';
            vm.count = vm.createdSurvey.length;


        };


        //RETRIEVE VALUE
        vm.name = $window.sessionStorage.getItem("SavedString");
        console.log(vm.name);

        vm.deleteSurvey = function (survey) {
            vm.createdSurvey.splice(vm.createdSurvey.indexOf(survey), 1);
            getLocalStorage.updateSurvey(vm.createdSurvey);
            vm.count = vm.createdSurvey.length;
        };
    }
})();