describe('dasboard service', function() {
	var productData ={"items":[{"survey_id":"1","topic":"Food Survey","created by":"Admin","description":"Do you need change in menu","Rating":"5"},{"survey_id":"2","topic":"Game Survey","created by":"Admin","description":"Need table tennis","Rating":"4"},{"survey_id":"3","topic":"Idea Survey","created by":"Admin","description":"Insurance idea is good or not","Rating":"5"},{"survey_id":"4","topic":"Holiday","created by":"Admin","description":"Planning for team holiday in some beautiful place","Rating":"5"},{"survey_id":"5","topic":"Festival","created by":"Admin","description":"celebration at office","Rating":"5"},{"survey_id":"6","topic":"A Survey","created by":"Admin","description":"abc","Rating":"4"},{"survey_id":"7","topic":"B Survey","created by":"Admin","description":"def","Rating":"4"},{"survey_id":"8","topic":"C Survey","created by":"Admin","description":"ghi","Rating":"4"},{"survey_id":"9","topic":"G Survey","created by":"Admin","description":"Need","Rating":"4"},{"survey_id":"10","topic":"10 Survey","created by":"Admin","description":"survey","Rating":"4"},{"survey_id":"11","topic":"11 Survey","created by":"Admin","description":"survey","Rating":"4"},{"survey_id":"12","topic":"G Survey","created by":"Admin","description":"Need","Rating":"4"},{"survey_id":"13","topic":"G Survey","created by":"Admin","description":"Need","Rating":"4"},{"survey_id":"14","topic":"G Survey","created by":"Admin","description":"Need","Rating":"4"},{"survey_id":"15","topic":"G Survey","created by":"Admin","description":"Need","Rating":"4"},{"survey_id":"16","topic":"G Survey","created by":"Admin","description":"Need","Rating":"4"}]};
	var survey ={};
	var $httpBackend;
	beforeEach(module('surveyApp.dashboard'));
	beforeEach(inject(function(_survey_, _$httpBackend_){
			survey=_survey_;
		    $httpBackend = _$httpBackend_;
		}));
	
	it('should return search survey data', function(){
	var response;
	var data;	
		$httpBackend.when('GET', 'https://api.myjson.com/bins/r4prd')
		.respond(200, productData);
		 survey.getsurvey().then(
				function (data) {
				response = data;
		        console.log(data);
				});
		$httpBackend.flush();
		expect(angular.equals(data)).toBe(true);
	});
});