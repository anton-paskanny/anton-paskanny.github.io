angular.module('toDoApp').factory('dataService', function($resource) {

    var url = "/tasks.json";

    return $resource(url, {});
});