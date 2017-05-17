(function() {
    angular
        .module('surveyApp')
        .controller('dsController', dsController);
    /*ngInject*/
   dsController.$inject = ['$scope','$window','$state']
    /*Used named functions instead of passing an anonymous function in as a callback.*/
    function dsController($scope,$window,$state){
        var vm = this; //controllerAs with vm

        /*"use strict" to indicate that the code should be executed in "strict mode"*/
        "use strict";
		
		 vm.submit = function(value) {

          $state.go('dashboard');
   //   alert("welcome" + user);

    };
				  


               

    };
})();