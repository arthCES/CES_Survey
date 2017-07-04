/*global angular*/
(function () {
	'use strict';
	angular
		.module('surveyApp')
		.factory('creategraph', creategraph);
	creategraph.$inject = ['$http', '$q'];
	function creategraph($http, $q) {
		return {
			getcreategraph: function () {
				var creategraph = $q.defer();
				$http
					.get('https://api.myjson.com/bins/taohb')
					.then(
						function (response) {
							creategraph.resolve(response.data);
						},
						function (error) {
							creategraph.reject(error);
						}
					);
				return creategraph.promise;
			}
		};
	}
})();