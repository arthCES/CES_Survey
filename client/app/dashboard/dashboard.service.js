/*global angular*/
(function () {
	'use strict';
	angular
		.module('surveyApp.dashboard')
		.factory('survey', survey);
	survey.$inject = ['$http', '$q', '$stateParams'];
	function survey($http, $q, $stateParams) {
		return {
			getsurvey: function () {
				var detail = $q.defer();
				$http({
					url : 'https://api.myjson.com/bins/r4prd',
					method : 'get'
					//params: '{survey_id:$stateParams.survey_id}'
				})
					.then(
						function (response) {
							detail.resolve(response.data);
						},
						function (error) {
							detail.reject(error);
						}
					);
				return detail.promise;
			}
		};
	}
})();