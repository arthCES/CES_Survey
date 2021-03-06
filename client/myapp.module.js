/*global angular*/
(function () {
    'use strict';
    angular
        .module('surveyApp', ['ui.router'])
	    .config(function ($httpProvider) {
		  //Enable cross domain calls
		    $httpProvider.defaults.useXDomain = true;
		  //Remove the header containing XMLHttpRequest used to identify ajax call 
           //http encoding has been done with respect to the headers in utf-8 character mode 
		    $httpProvider.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
		})
	    .run(function ($rootScope) {
            $rootScope.$on('$viewContentLoaded', function (event, next) {
                componentHandler.upgradeAllRegistered();
            });
        })
        .config(homeConfig);


    homeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function homeConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider
            .when('', '/')
            .otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'login/home.html',
                controller: 'SurveyController',
			    controllerAs : 'vm'
            })
		    .state('dashboard', {
                url: '/',
                templateUrl: 'dashboard/dashboard.html',
                controller: 'dsController',
			    controllerAs : 'vm'
            });
		
		
		
    }
})();


