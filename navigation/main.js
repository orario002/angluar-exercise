var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "index.html"
    })
    .when("/work", {
        templateUrl : "work.html"
    })
    .when("/about", {
        templateUrl : "about.html"
    })
    .when("/career", {
        templateUrl : "career.html"
    })
    .when("/contactus", {
        templateUrl : "contactus.html"
    });
});