var heroApp = angular.module('heroApp', ['ngRoute']);

heroApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/entry', {
      templateUrl: '/views/entry.html',
      controller: "entryController",
    })
    .when('/find', {
      templateUrl: '/views/find.html',
      controller: "searchController",
    })
    .otherwise({
      redirectTo: 'entry'
    });
}]);
