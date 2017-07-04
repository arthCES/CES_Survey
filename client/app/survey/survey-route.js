/*global angular*/
(function () {
    'use strict';
    angular
        .module('surveyApp')
	  
	    .run(function ($rootScope) {
            $rootScope.$on('$viewContentLoaded', function (event, next) {
                componentHandler.upgradeAllRegistered();
            });
        })
        .config(homeConfig);


    homeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function homeConfig($stateProvider, $urlRouterProvider) {


        $stateProvider
               .state('survey', {
                url:  '/survey',
                templateUrl: 'app/survey/survey_detail.html',
			    controller: 'ReadSurveyController',
			    controllerAs : 'vm'
            })
		       .state('Create survey', {
                url:  '/Create_survey',
                templateUrl: 'app/survey/Create_survey.html',
                controller: 'CreatesurveyController',
			    controllerAs : 'vm'
            });
		   
			
		      
		
    }
	
})();
