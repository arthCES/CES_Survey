/*global angular*/
(function () {
	'use strict';
	angular
		.module('surveyApp')
	    .factory('getLocalStorage', getLocalStorage);
	function getLocalStorage() {
		var surveyList = {};  
		return {
		    list: surveyList,  
            updateSurvey: function (createdSurveyArr) {  
                if (window.localStorage && createdSurveyArr) {  
                    //Local Storage to add Data  
                    localStorage.setItem("createdSurvey", angular.toJson(createdSurveyArr));  
                }  
                surveyList = createdSurveyArr;  
  
            },  
            getSurvey : function () {  
                //Get data from Local Storage  
                surveyList = angular.fromJson(localStorage.getItem("createdSurvey"));  
                return surveyList ? surveyList : [];  
            } 
		};
	}
})();