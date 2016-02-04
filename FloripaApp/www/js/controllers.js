floripaApp.controller("GMapController", ['$scope', 'uiGmapGoogleMapApi', '$location', 'searchService', function ($scope, uiGmapGoogleMapApi, $location, searchService) {

    $scope.goBack = function () {
        $location.url('/');
    };

    $scope.search = function () {
        searchService.streetName = $scope.streetName;
        searchService.doSearch = true;
        $location.url('/');
    };

    $scope.putMarker = function (mapModel, location) {
        if (!$scope.marker) {
            $scope.marker = new google.maps.Marker({
                position: location,
                map: mapModel
            });
        } else {
            $scope.marker.setPosition(location);
        }
    }

    $scope.map = {
        // should use the one from the device, just a mock for: Trindade, Florianopolis-SC
        center: {
            latitude: -27.5964796,
            longitude: -48.5205031
        },
        events: {
            click: function (mapModel, eventName, originalEventArgs) {
                var e = originalEventArgs[0];
                $scope.geocode(e.latLng);
                $scope.putMarker(mapModel, e.latLng);
            },
        },
        zoom: 17
    };

    var geocoder = new google.maps.Geocoder();

    $scope.geocode = function (latlng) {
        geocoder.geocode({
            'latLng': latlng
        }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[1]) {
                    $scope.streetName = results[0].address_components[1].long_name;
                    $scope.$evalAsync();
                } else {
                    console.log('Location not found');
                }
            } else {
                console.log('Geocoder failed due to: ' + status);
            }
        });
    }

}]);


floripaApp.controller('SearchCtrl', ['$scope', 'searchService', '$location', function ($scope, searchService, $location) {

    $scope.searchService = searchService;

    $scope.openMap = function () {
        searchService.streetName = this.streetName;
        $location.url('/map/');
    };

    $scope.getDetails = function (route) {
        searchService.streetName = this.streetName;

        var url = '/detail/' + route.id + '/' +
            route.shortName + '/' + route.longName;

        $location.url(url);
    }

    if (searchService.streetName) {
        $scope.streetName = searchService.streetName;
        $scope.streetNameSubmit = searchService.streetName;
    }

}]);

floripaApp.controller('FloripaRoutesCtrl', ['$scope', 'FindRoutesByStopName', 'searchService', function ($scope, FindRoutesByStopName, searchService) {

    $scope.submit = function () {

        var payload = {
            "params": {
                "stopName": "%" + $scope.streetName + "%"
            }
        };

        searchService.routes = FindRoutesByStopName.save({}, payload);

        if ($scope.streetName) {
            $scope.streetNameSubmit = $scope.streetName;
        }

    };

    if (searchService.doSearch) {
        $scope.submit();
        searchService.doSearch = false;
    }

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