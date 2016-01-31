'use strict';

angular
    .module('flickrConsumerApp', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngRoute',
        'ngStorage'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
