angular.module('toDoApp').controller('addTaskController', [
  '$scope',
  '$location',
  'todoFactory',
  function($scope, $location, todoFactory) {
    $scope.formTitle = 'Add new task';
    $scope.submitTitle = 'Add';

    $scope.task = {
      id: todoFactory.getAllTasks().length + 1,
      text: '',
      date: '',
      done: false
    };

    $scope.clickHandler = function() {
      if ($scope.task.text && $scope.task.date) {

        todoFactory.addTask($scope.task);

        console.log("lol: ", todoFactory.getAllTasks());

        // Redirect to main page
        $location.path('/');

      }
    };
  }
]);
