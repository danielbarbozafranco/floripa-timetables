var floripaApp = angular.module('floripaApp', ['ngResource', 'ngRoute', 'ui.bootstrap']);

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
        .otherwise({
            redirectTo: '/'
        });
});