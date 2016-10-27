


var AwesomeAngularMVCApp = angular.module('AwesomeAngularMVCApp', ['ngRoute']);

AwesomeAngularMVCApp.controller('LandingPageController', LandingPageController);
AwesomeAngularMVCApp.controller('LoginController', LoginController);

AwesomeAngularMVCApp.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);

var configFunction = function ($routeProvider, $httpProvider) {
	$routeProvider.
		when('/routeOne', {
			templateUrl: 'routesDemo/one'
		})
		.when('/routeTwo/:donuts', {
			templateUrl: function (params) { return '/routesDemo/two?donuts=' + params.donuts; }
		})
		.when('/routeThree', {
			templateUrl: 'routesDemo/three'
		})
		.when('/login?returnUrl', {
			templateUrl: '/Account/Login',
			controller: LoginController
		});

	$httpProvider.interceptors.push('AuthHttpResponseInterceptor');
}

configFunction.$inject = ['$routeProvider', '$httpProvider'];

AwesomeAngularMVCApp.config(configFunction);