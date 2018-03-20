angular.module('toDoApp').controller('addTaskController', [
  '$scope',
  '$location',
  'todoFactory',
  function($scope, $location, todoFactory) {
    $scope.formTitle = 'Add new task';
    $scope.submitTitle = 'Add';

    $scope.task = {
      text: '',
      date: '',
      done: false
    };

    $scope.clickHandler = function() {
      if ($scope.task.text && $scope.task.date) {

        todoFactory.addTask($scope.task);

        // Redirect to main page
        $location.path('/');

      }
    };
  }
]);
