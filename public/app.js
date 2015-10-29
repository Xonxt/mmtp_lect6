'use strict';

var appModule = angular.module('app', ['app.main', 'ngNewRouter', 'ngResource', 'ngFileUpload']);

appModule.controller('AppController', ['$router', AppController]);

function AppController($router) {
	
	$router.config([
		{path: '/', component: 'main'}
	]);
	
}