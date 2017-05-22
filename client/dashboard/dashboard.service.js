/*global angular*/
(function () {
	'use strict';
	angular
		.module('surveyApp')
		.factory('survey', survey);
	survey.$inject = ['$http', '$q', '$stateParams'];
	function survey($http, $q, $stateParams) {
		return {
			getsurvey: function () {
				var detail = $q.defer();
				$http({
					url : 'https://api.myjson.com/bins/pg57d',
					method : 'get'
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