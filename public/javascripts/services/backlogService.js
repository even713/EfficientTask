et.modules.controllers
.factory('getList', function(){
	 //TODO: get via ajax
	 /*
	  * store in localStorage
	  * key: "backlog", value: [{title:xxx, content:xxx, createDate:xxx, modifyDate:xxx, priority: 123, tags: ['phyiscial', 'work']}]
	  */
	var responseText = null;
	return function(listType, orderBy, callback){
		orderBy = orderBy || priority;
		responseText = $.session.get(listType);
		if(!responseText || responseText == "") {
			responseText = "[]";
		}
		var result;
		eval('result=' + responseText);
		result.sort(function(a, b){
			return a[orderBy] - b[orderBy];
		});
		callback(result);
		return result;
	}
});

et.modules.controllers
.factory('getBacklog', ['getList', function(getList){
	return function(orderBy, callback){
		return getList("backlog", orderBy, callback); 
	}
}]);