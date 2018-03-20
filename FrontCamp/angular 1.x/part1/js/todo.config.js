angular.module('toDoApp').config(['$routeProvider', function($routeProvider) {

  $routeProvider.
    when('/', {
      templateUrl: 'templates/tasksLists.html',
      controller: 'tasksListsController'
    }).
    when('/addTask', {
      templateUrl: 'templates/form.html',
      controller: 'addTaskController'
    }).
    when('/editTask/:id', {
      templateUrl: 'templates/form.html',
      controller: 'editTaskController'
    }).
    otherwise({
      redirectTo: '/404'
    });

}]);
