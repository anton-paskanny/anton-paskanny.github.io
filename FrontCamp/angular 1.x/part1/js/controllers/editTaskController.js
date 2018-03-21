angular.module('toDoApp').controller('editTaskController', [
  '$scope',
  'todoFactory',
  '$routeParams',
  '$location',
  'dataService',
  function($scope, todoFactory, $routeParams, $location, dataService) {
      $scope.formTitle = 'Edit task';
      $scope.submitTitle = 'Edit';
      $scope.editForm = true;

      var taskToEdit = todoFactory.findTask($routeParams.id);
      taskToEdit.date = new Date(taskToEdit.date);

      $scope.task = taskToEdit;

      $scope.clickHandler = function() {
        
        todoFactory.updateTask($routeParams.id, $scope.task);

        $location.path('/');
      }
  }
]);
