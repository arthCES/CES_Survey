/*global angular*/
(function() {
    'use strict';
    angular
        .module('surveyApp')
        .factory('table', table);
    table.$inject = ['NgTableParams'];

    function table(NgTableParams) {
        return {
            getTable: function createUsingFullOptions() {
                var initialParams = {
                    count: 5 // initial page size
                };
                var initialSettings = {
                    // page size buttons (right set of buttons in demo)
                    counts: [],
                    // determines the pager buttons (left set of buttons in demo)
                    paginationMaxBlocks: 13,
                    paginationMinBlocks: 2,
                    dataset: simpleList
                };
                return new NgTableParams(initialParams, initialSettings);
            }
        }
    };

})();