/*global angular*/
(function () {
	'use strict';
	angular
		.module('surveyApp')
		.factory('result', result);
	result.$inject = ['$http', '$q'];
	function result($http, $q) {
		return {
			getresult: function () {
				var result = $q.defer();
				$http
					.get('https://api.myjson.com/bins/i01w5')
					.then(
						function (response) {
							result.resolve(response.data);
						},
						function (error) {
							result.reject(error);
						}
					);
				return result.promise;
			}
		};
	}
})();