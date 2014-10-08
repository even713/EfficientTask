'use strict';

var et = {};
et.modules = {};

/* App Module */

et.modules.mainApp = angular.module('mainApp', ['ngRoute', 'et.modules.controllers']);

et.modules.mainApp.config(function($routeProvider) {
  $routeProvider
   .when('/backlog', {
    templateUrl: '../htmls/views/backlog.html',
	//template: '<div>back log view {{name}}</div>',
    controller: 'backlogController'
    }
  )
  .when('/todo', {
    templateUrl: '../htmls/views/todo.html',
	//template: '<div>todo view {{name}}</div>',
    controller: 'todoController'
  })
    .when('/plan', {
    templateUrl: '../htmls/views/plan.html',
	//template: '<div>back log view {{name}}</div>',
    controller: 'planController'
    }
  )
  .when('/done', {
    templateUrl: '../htmls/views/done.html',
	//template: '<div>todo view {{name}}</div>',
    controller: 'doneController'
  }). 
  otherwise({
	redirectTo: '/backlog'
  });
});

/* Controllers */

et.modules.controllers = angular.module('et.modules.controllers', []);