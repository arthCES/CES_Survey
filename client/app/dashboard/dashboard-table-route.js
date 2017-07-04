/*global angular*/
(function () {
    'use strict';
    angular
        .module('surveyApp.dashboard')
	    .config(stateConfig);
    stateConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function stateConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('dashboard', {
			    url: '/dashboard',
			    views: {
				    '': {
				        templateUrl: 'app/dashboard/dashboard.html',
                        controller: 'dsController',
			            controllerAs : 'vm',
			            resolve: {
                            result : function (survey) {
                                return survey.getsurvey();
                            }
				        }
                    },
				
			        'table@dashboard' : {
			            templateUrl: 'app/dashboard/table.html'
			        }
			    }
            });
	}
})();
