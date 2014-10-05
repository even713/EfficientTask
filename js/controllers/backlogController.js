et.modules.controllers
.controller('backlogController', function($scope, $route, $routeParams, $location) {
	 $scope.name = "todoController";
     $scope.$route = $route;
     $scope.$location = $location;
     $scope.$routeParams = $routeParams;
 });