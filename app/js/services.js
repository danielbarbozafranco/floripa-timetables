floripaApp.factory('searchService', function () {
    return {};
});

floripaApp.factory('FindRoutesByStopName', ['$resource', '$http',

  function ($resource, $http) {

        $http.defaults.headers.common['Authorization'] = authString;

        return $resource(api_url + 'findRoutesByStopName/run/', {}, {
            save: {
                method: 'POST',
                headers: {
                    'X-AppGlu-Environment': 'staging',
                    'Content-type': 'application/json'

                }
            }
        });
}]);

floripaApp.factory('FindStopsByRouteId', ['$resource', '$http',

  function ($resource, $http) {

        $http.defaults.headers.common['Authorization'] = authString;

        return $resource(api_url + 'findStopsByRouteId/run/', {}, {
            save: {
                method: 'POST',
                headers: {
                    'X-AppGlu-Environment': 'staging',
                    'Content-type': 'application/json'

                }
            }
        });
}]);

floripaApp.factory('FindDeparturesByRouteId', ['$resource', '$http',

  function ($resource, $http) {

        $http.defaults.headers.common['Authorization'] = authString;

        return $resource(api_url + 'findDeparturesByRouteId/run/', {}, {
            save: {
                method: 'POST',
                headers: {
                    'X-AppGlu-Environment': 'staging',
                    'Content-type': 'application/json'

                }
            }
        });
}]);