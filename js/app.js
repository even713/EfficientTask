'use strict';

var et = {};
et.modules = {};

/* App Module */

et.modules.mainApp = angular.module('mainApp', ['ngRoute', 'et.modules.controllers']);

et.modules.mainApp.config(function($routeProvider) {
  $routeProvider
   .when('/backlog', {
    //templateUrl: 'views/backlog.html',
	template: '<div>back log view {{name}}</div>',
    controller: 'backlogController'
    }
  )
  .when('/todo', {
    //templateUrl: 'views/todo.html',
	template: '<div>todo view {{name}}</div>',
    controller: 'todoController'
  }).
  otherwise({
	redirectTo: '/backlog'
  });
});

/* Controllers */

et.modules.controllers = angular.module('et.modules.controllers', []);