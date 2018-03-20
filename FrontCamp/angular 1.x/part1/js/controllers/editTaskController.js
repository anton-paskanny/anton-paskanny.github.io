angular.module('toDoApp').controller('editTaskController', [
  '$scope',
  'todoFactory',
  '$routeParams',
  '$location',
  function($scope, todoFactory, $routeParams, $location) {
      $scope.formTitle = 'Edit task';
      $scope.submitTitle = 'Edit';
      $scope.editForm = true;

      $scope.task = {
        text: '',
        date: new Date(),
        done: false
      }

      //$scope.task.date = new Date(todoFactory.findTask($routeParams.id).date);

      $scope.task = todoFactory.findTask($routeParams.id);

      $scope.clickHandler = function() {
        
        todoFactory.updateTask($routeParams.id, $scope.task);

        // redirect to main page
        $location.path('/');
      }
  }
]);
