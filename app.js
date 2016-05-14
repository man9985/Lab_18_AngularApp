angular.module('angularApp', ['ngRoute'])
	.config(function($routeProvider) {
		$routeProvider
		.when('/',
		{
			controller: 'controllerOne',      
			templateUrl: 'partial.html'
		})
		.when('/display',
		{	
			controller: 'controllerTwo',	  
			templateUrl: 'partialTwo.html'		
		})
		.otherwise({redirectTo: '/'});

	});

	