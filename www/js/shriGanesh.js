angular.module('app',['ngRoute','app.Controllers'])
.config(['$routeProvider',function($routeProvider){
	console.log("Inside the route");
	$routeProvider.
	when('/',{

		templateUrl: 'partials/homePage.html',
		controller: 'homeCtrl'

	})
	when('/home',{
		templateUrl: 'partials/homePage.html',
		controller: 'homeCtrl'
	})
	when('/contact',{
		templateUrl: 'partials/footer.html'
		
	})
	.otherwise({
        redirectTo: '/'
      });
}])
.run(['$rootScope', '$location', '$http', function ($rootScope, $location, $http) {
}]); 