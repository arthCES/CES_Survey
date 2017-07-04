// app/dashboard/dashboard.spec.js
describe('Dashboard Route', function () {
  // Define global references for injections
    'use strict';	
    var $state,
        $rootScope,
        state = 'dashboard';

  // Inject and assign the $state and $rootScope services.
  // Put the template in template cache.
    beforeEach(module('ui.router'));
    beforeEach(module('surveyApp.dashboard'));
    beforeEach(inject(function (_$state_, $templateCache, _$rootScope_) {
        $state = _$state_;
        $rootScope = _$rootScope_;
        $templateCache.put('app/dashboard/dashboard.html', '');
	    $templateCache.put('app/dashboard/table.html', '');  
    }));

  // Testing whether the url is correct
    it('should respond to URL', function () {
        expect($state.href(state)).toEqual('#/dashboard');
    });

  // Testing whether state activates correctly
    it('should activate the state', function () {
        $state.go(state);
        $rootScope.$digest();
        expect($state.current.name).toBe(state);
    });
});
          