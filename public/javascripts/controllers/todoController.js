et.modules.controllers
 .controller('todoController', function($scope, $route, $routeParams, $location) {
	 $scope.name = "backlogController";
     $scope.$route = $route;
     $scope.$location = $location;
     $scope.$routeParams = $routeParams;
 });
