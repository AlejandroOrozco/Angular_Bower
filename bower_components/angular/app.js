var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.
		when('/', {
			templateUrl: 'partials/index.html',
		}).
		when('/products', {
			templateUrl: 'partials/products.html',
			controller: 'productsCtrl'
		}).
		when('/todo', {
			templateUrl: 'partials/todo.html',
			controller: 'todoCtrl'
		}).
		when('/about', {
			templateUrl: 'partials/about.html',
		})
}])