et.modules.controllers
.controller('backlogController', ['$scope', 'getBacklog', function($scope, getBacklog) {
	 $scope.orderBy = "priority";
	 getBacklog($scope.orderBy, function(result){
		console.debug(result);
	 }); 
 }]);