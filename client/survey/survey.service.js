/*global angular*/
(function () {
	'use strict';
	angular
		.module('surveyApp')
		.factory('createsurvey', createsurvey);
	createsurvey.$inject = ['$http', '$q'];
	function createsurvey($http, $q) {
		return {
			getcreatesurvey: function () {
				var createsurvey = $q.defer();
				$http
					.get('https://api.myjson.com/bins/18u8dl')
					.then(
						function (response) {
							createsurvey.resolve(response.data);
						},
						function (error) {
							createsurvey.reject(error);
						}
					);
				return createsurvey.promise;
			}
		};
	}
})();