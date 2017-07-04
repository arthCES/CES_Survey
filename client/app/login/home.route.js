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
            .state('home', {
                url: '/',
                templateUrl: 'app/login/home.html',
                controller: 'SurveyController',
			    controllerAs : 'vm'
            });
		    
		      
		
    }
	
})();
