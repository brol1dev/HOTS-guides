'use strict';

var app = angular.module('guidesApp.controllers', []);

app.controller('LoginCtrl', ['$scope', 'auth', '$location', function($scope, auth, $location) {

	$scope.login = function() {
		auth.signin({
			popup: true
		})
		.then(function() {
			// Success
			$location.path('/');
		}, function(error) {
			// Error
			console.log('error login in %s', error);
		});
	};
}]);

app.controller('HomeCtrl', ['$scope', 'auth', '$location', function($scope, auth, $location) {

	$scope.logout = function() {
		auth.signout();
		$location.path('/login');
	};
}]);