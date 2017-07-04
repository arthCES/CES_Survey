/*global angular, console*/
(function() {
    /*"use strict" to indicate that the code should be executed in "strict mode"*/
    'use strict';
    angular
        .module('surveyApp')
        .directive('mydate', mydate);

    function mydate() {
        return {
          //  replace: true,
            templateUrl: "date_template.html",
            controller: ['$scope', controllerName]
        };
    }

    function controllerName($scope) {
        $scope.months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sept", "oct", "nov", "dec"];
        $scope.years = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011];
        $scope.maxdates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
        $scope.avgdates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
        $scope.days = { 0: "sun", 1: "mon", 2: "tue", 3: "wed", 4: "thu", 5: "fri", 6: "sat" };
        $scope.selDate = function(val) {
            $scope.calendarDate = val;
        };
        $scope.year = function(selectedYear) {
            //$scope.d = new Date();
            $scope.selectedYear = selectedYear;
            if ((($scope.selectedYear % 100 === 0) ? ($scope.selectedYear % 400 === 0) : ($scope.selectedYear % 4 === 0)) === true) {
                $scope.mindates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
                $scope.monthsTerm = { jan: 5, feb: 1, mar: 2, apr: 5, may: 0, jun: 3, jul: 5, aug: 1, sept: 4, oct: 6, nov: 2, dec: 4 };
            } else {
                $scope.mindates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];
                $scope.monthsTerm = { jan: 6, feb: 2, mar: 2, apr: 5, may: 0, jun: 3, jul: 5, aug: 1, sept: 4, oct: 6, nov: 2, dec: 4 };
            }

        };
        $scope.getDay = function(selectedYear, selectedMonth, calendarDate) {
            $scope.selectedYear = selectedYear;
            $scope.selectedMonth = selectedMonth;
            $scope.calendarDate = calendarDate;

            //calculate dayTerm
            $scope.dayTerm = ($scope.calendarDate % 7);
            //calculate monthTerm
            $scope.monthTerm = $scope.monthsTerm[$scope.selectedMonth];

            //calculate yearTerm
            $scope.lasttwodigit = parseInt($scope.selectedYear.toString().substr(-2));
            //calculate $scope.yseven
            $scope.yseven = parseInt($scope.lasttwodigit % 7);

            //calculate $scope.yfour
            $scope.yfour = parseInt($scope.lasttwodigit / 4);


            $scope.yearTerm = parseInt($scope.yseven) + parseInt($scope.yfour);
            //formulae to calculate day
            $scope.week = parseInt($scope.dayTerm) + parseInt($scope.monthTerm) + parseInt($scope.yearTerm);
            //calculate weekTerm
            $scope.weekTerm = parseInt($scope.week % 7);
            $scope.day = $scope.days[$scope.weekTerm];
            // console.log($scope.calendarDate, $scope.dayTerm);
            //console.log($scope.selectedMonth, $scope.monthTerm);
            //console.log($scope.yseven, $scope.yfour, $scope.yearTerm, $scope.week, $scope.weekTerm, $scope.day);
        };
    };

})();