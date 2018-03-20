angular.module('toDoApp').controller('editTaskController', [
  '$scope',
  'todoFactory',
  '$routeParams',
  '$location',
  function($scope, todoFactory, $routeParams, $location) {
      $scope.formTitle = 'Edit task';
      $scope.submitTitle = 'Edit';
      $scope.editForm = true;

      var taskToEdit = todoFactory.findTask($routeParams.id);
      console.log("Task before editing: ", taskToEdit);

      //taskToEdit.date = new Date(taskToEdit.date);

      console.log("Task after editing: ", taskToEdit);

      $scope.task = taskToEdit;

      $scope.clickHandler = function() {
        
        todoFactory.updateTask($routeParams.id, $scope.task);

        // redirect to main page
        $location.path('/');
      }
  }
]);
