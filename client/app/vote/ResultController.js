/*global angular, console*/
(function () {
	/*"use strict" to indicate that the code should be executed in "strict mode"*/
	'use strict';
    angular
        .module('surveyApp')
        .controller('ResultController', ResultController);
    /*ngInject*/
    ResultController.$inject = ['$scope', '$http', '$window', 'result', '$state', 'creategraph'];
    /*Used named functions instead of passing an anonymous function in as a callback.*/
    function ResultController($scope, $http, $window, result, $state, creategraph) {
        var vm = this; 
        vm.result_id = null;
        vm.description = null;
		vm.onloadFun = function (value) {

			result.getresult().then(
				function (response) {
				//	alert("Angularjs call function on page load");
					//console.log(response);
					vm.result = response.items;
				//	 window.alert(vm.emp_id);
					 
				},
				function (response) {
					console.log("reject", response);
				}
			);
			
			//to get result for graph
			creategraph.getcreategraph().then(
				function (response) {
				//	alert("Angularjs call function on page load");
					console.log(response);
			    // calculation for pie-chart		
					vm.data = response;
					vm.namex = Object.keys(vm.data);
				    vm.voted = response.completed;
					vm.notvoted = response.notcompleted;
					vm.inprogress = response.progress;
					vm.votedlen = Object.keys(vm.voted).length;
					vm.notvotedlen = Object.keys(vm.notvoted).length;
					vm.inprogresslen = Object.keys(vm.inprogress).length;
					vm.y = [vm.votedlen, vm.notvotedlen, vm.inprogresslen];
				    vm.obj = [];
				    var key = [];
                    for (var i=0; i<vm.namex.length; i++) {
                    vm.obj[i]={key : vm.namex[i],y: vm.y[i]};
				    }
				   console.log(vm.obj);
				   },
				function (response) {
					console.log("reject", response);
				}
			);
			
			//pie-chart
			vm.options = {
            chart: {
                type: 'pieChart',
                height: 500,
                x: function(d){return d.key;},
                y: function(d){return d.y;},
                showLabels: true,
				// turn off and the error does not arrise
                useInteractiveGuideline: true,
                duration: 500,
                labelThreshold: 0.01,
                labelSunbeamLayout: true,
                legend: {
                    margin: {
                        top: 5,
                        right: 35,
                        bottom: 5,
                        left: 0
                    }
                }
            }
        };
			
            //RETRIEVE VALUE
            vm.name = $window.sessionStorage.getItem("SavedString");
			console.log(vm.name); 
			//json data
		
		
        };
    }
})();