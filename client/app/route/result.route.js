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
            .state('result', {
                url:  '/result',
			    views: {
				    '': {
				        templateUrl: 'app/vote/result.html'
                    },
				    'info@result': {
					    templateUrl: 'app/vote/resultinfo.html',
					    controller: 'ResultController',
			            controllerAs : 'vm'
					}  
				}
			});	
	}
})();
