/*global angular*/
(function () {
    'use strict';
    angular
        .module('surveyApp')
	    .config(homeConfig);
    homeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function homeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('dashboard', {
			    url: '/dashboard',
                templateUrl: 'app/dashboard/dashboard.html',
                controller: 'dsController',
			    controllerAs : 'vm',
			    resolve: {
                    result : function (survey) {
                        return survey.getsurvey();
                    }
				}
            })
		      .state('table', {
			    parent : 'dashboard',
                url:  '/table',
                templateUrl: 'app/dashboard/table.html'
			 
            });
	}
})();
