floripaApp.controller('SearchCtrl', ['$scope', 'searchHistory', '$location', function ($scope, searchHistory, $location) {

    $scope.getDetails = function (route) {
        searchHistory.streetName = this.streetName;
        searchHistory.routes = this.routes;

        var url = '/detail/' + route.id + '/' +
            route.shortName + '/' + route.longName;

        $location.url(url);
    }

    if (searchHistory.streetName) {
        $scope.routes = searchHistory.routes;
        $scope.streetName = searchHistory.streetName;
        $scope.streetNameSubmit = searchHistory.streetName;
    }

}]);

floripaApp.controller('FloripaRoutesCtrl', ['$scope', 'FindRoutesByStopName', 'searchHistory', function ($scope, FindRoutesByStopName, searchHistory) {

    $scope.submit = function () {

        var payload = {
            "params": {
                "stopName": "%" + $scope.streetName + "%"
            }
        };

        $scope.routes = FindRoutesByStopName.save({}, payload);

        if ($scope.streetName) {
            $scope.streetNameSubmit = $scope.streetName;
        }

    };

}]);

floripaApp.controller('FloripaDetailCtrl', ['$scope', '$routeParams', '$location', 'FindStopsByRouteId', 'FindDeparturesByRouteId', function ($scope, $routeParams, $location, FindStopsByRouteId, FindDeparturesByRouteId) {

    $scope.goBack = function () {
        $location.url('/');
    }

    $scope.stops = {};
    $scope.departures = {};

    var routeId = $routeParams.routeId;

    $scope.routeName = $routeParams.routeShortName + " - " + $routeParams.routeLongName;

    var payload = {
        "params": {
            "routeId": routeId
        }
    };

    $scope.stops = FindStopsByRouteId.save({}, payload);
    $scope.departures = FindDeparturesByRouteId.save({}, payload);


}]);