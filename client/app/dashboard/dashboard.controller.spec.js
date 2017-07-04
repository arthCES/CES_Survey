describe('SurveyTest Controller', function () {
	var results = {};
    var $controller;
	var $location;
	var $q;
	var $rootscope;
	var $scope;
	var survey = {};
	var ctrl = null;
	
	beforeEach(module('surveyApp.dashboard'));
    beforeEach(inject(function (_$controller_,_$location_, _$q_, _$rootScope_, _survey_) {
		$controller = _$controller_;
		$location = _$location_;
		$scope = {};
		$q = _$q_;
		$rootscope = _$rootScope_;
		survey = _survey_;
	}));
	it('should load survey results', function () {
	    var response;
	    spyOn(survey, 'getsurvey').and.callFake(function () {
			var detail = $q.defer();
			detail.resolve(results);
			return detail.promise;
		});
        ctrl = $controller('dsController', {$scope: $scope});
		$rootscope.$apply();
	   
		expect(survey.getsurvey).toHaveBeenCalled();
       
	});
});