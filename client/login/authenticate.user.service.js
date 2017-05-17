/*global angular*/
(function () {
	'use strict';
	angular
		.module('surveyApp')
		.factory('user', user);
	user.$inject = ['$http', '$q'];
	function user($http, $q) {
		return {
			getUser: function () {
				var abc = $q.defer();
				$http
					.get('https://api.myjson.com/bins/c22vt')
					.then(
						function (response) {
							abc.resolve(response.data);
						},
						function (error) {
							abc.reject(error);
						}
					);
				return abc.promise;
			}
		};
	}
})();