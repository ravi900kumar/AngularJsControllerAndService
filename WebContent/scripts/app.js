
var app = angular.module('myapp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/',
            {
                controller: 'homeController',
                templateUrl: 'views/home.html'
            });
            
    $routeProvider
    .when('/about-us',
        {
            controller: 'aboutusController',
            templateUrl: 'views/aboutus.html'
        });
 
    $routeProvider.otherwise({ redirectTo: '/' });
});




