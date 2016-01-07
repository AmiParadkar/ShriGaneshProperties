angular.module('app',['ngRoute','app.Controllers'])
.config(['$routeProvider',function($routeProvider){
	console.log("Inside the route");
	$routeProvider
	.when('/',{

		templateUrl: '/partials/homePage.html',
		controller: 'homeCtrl'

	})
	.when('/home',{
		templateUrl: '/partials/homePage.html',
		controller: 'homeCtrl'
	})
	.when('/register',{
		templateUrl: '/partials/register.html',
		controller: 'homeCtrl'
	})
	.when('/carousel',{
		templateUrl: '/partials/carousel.html',
		controller: 'homeCtrl'
	})
	.when('/signIn',{
		templateUrl: '/partials/login.html',
		controller: 'homeCtrl'
	})
	.when('/contact',{
		templateUrl: '/partials/footer.html',
		controller: 'homeCtrl'
		
	})
	.otherwise({
        redirectTo: '/'
      });
}])
.run(['$rootScope', '$location', '$http', function ($rootScope, $location, $http) {
}]); 
console.log('angular', angular)