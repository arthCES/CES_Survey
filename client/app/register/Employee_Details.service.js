/*global angular*/
(function () {
	'use strict';
	angular
		.module('surveyApp')
		.factory('addEmp', addEmp);
	addEmp.$inject = ['$http', '$q', '$stateParams'];
	function addEmp($http, $q, $stateParams) {
		return {
			addEmp: function () {
				var detail = $q.defer();
				$http({
					url : 'https://api.myjson.com/bins/18yqex',
					method : 'get'
					//params: '{addEmp_id:$stateParams.addEmp_id}'
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