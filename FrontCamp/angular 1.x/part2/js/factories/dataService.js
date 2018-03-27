angular.module('testApp').factory('dataService',['$resource', function($resource) {

    var url = '/articles.json';

    return $resource(url, {}, {
        query: {
            method: 'GET',
            params: {},
            isArray: true,
            cache: true
        }
    });

}]);