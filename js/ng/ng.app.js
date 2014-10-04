et.modules.mainApp = angular.module('mainApp', ['ngRoute']);

 et.modules.mainApp
  .controller('MainController', function($scope, $route, $routeParams, $location) {
     $scope.$route = $route;
     $scope.$location = $location;
     $scope.$routeParams = $routeParams;
 })
 .controller('backlogController', function($scope, $route, $routeParams, $location) {
	 $scope.name = "backlogController";
     $scope.$route = $route;
     $scope.$location = $location;
     $scope.$routeParams = $routeParams;
 })
 .controller('todoController', function($scope, $route, $routeParams, $location) {
	 $scope.name = "todoController";
     $scope.$route = $route;
     $scope.$location = $location;
     $scope.$routeParams = $routeParams;
 })
 .config(function($routeProvider, $locationProvider) {
  $routeProvider
   .when('/backlog', {
    //templateUrl: 'views/backlog.html',
	template: '<div>back log view</div>',
    controller: 'backlogController'
    }
  )
  .when('/todo', {
    //templateUrl: 'views/todo.html',
	template: '<div>todo view</div>',
    controller: 'todoController'
  }).
      otherwise({
        redirectTo: '/backlog'
      });

  // configure html5 to get links working on jsfiddle
  $locationProvider.html5Mode(true);
});