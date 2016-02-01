var floripaApp = angular.module('floripaApp', ['ngResource', 'ngRoute', 'ui.bootstrap', 'uiGmapgoogle-maps']);

var authString = 'Basic V0tENE43WU1BMXVpTThWOkR0ZFR0ek1MUWxBMGhrMkMxWWk1cEx5VklsQVE2OA==';
var api_url = 'https://api.appglu.com/v1/queries/';

floripaApp.config(function ($routeProvider) {

    $routeProvider
        .when('/', {
            controller: 'SearchCtrl as searchCtrl',
            templateUrl: 'partials/search.html',
        })
        .when('/detail/:routeId/:routeShortName/:routeLongName', {
            controller: 'FloripaDetailCtrl as detailCtrl',
            templateUrl: 'partials/detail.html',
        })
        .when('/map', {
            controller: 'GMapController',
            templateUrl: 'partials/map.html',
        })
        .otherwise({
            redirectTo: '/'
        });
});

floripaApp.config(function (uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        //    key: 'your api key',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
})