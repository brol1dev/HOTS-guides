'use strict';

angular.module('guidesApp', [
	'ngRoute',
	'auth0',
	'guidesApp.controllers'
])
.config(['authProvider', '$routeProvider', '$httpProvider', function(authProvider, $routeProvider, $httpProvider) {
	$routeProvider
	.when('/', {
		controller: 'HomeCtrl',
		templateUrl: 'partials/home.html',
		requiresLogin: true
	})
	.when('/login', {
		controller: 'LoginCtrl',
		templateUrl: 'partials/login.html'
	});

	authProvider.init({
		domain: 'rcvrgs.auth0.com',
		clientID: 'mgBCT5y8QzJQDYpjzkDdHzgmOMDvcs2v',
		callbackURL: location.href,
		loginUrl: '/login'
	});

	$httpProvider.interceptors.push('authInterceptor');
}])
.run(function(auth) {
	auth.hookEvents();
});