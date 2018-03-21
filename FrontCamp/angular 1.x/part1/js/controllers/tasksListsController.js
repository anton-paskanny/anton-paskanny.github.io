angular.module('toDoApp').controller('tasksListsController', [
  '$scope',
  '$location',
  'todoFactory',
  function($scope, $location, todoFactory) {
    $scope.tasks = todoFactory.getAllTasks();
    $scope.order = '-date';

    updateView('all');

    function updateList() {
      switch ($scope.taskType) {
        case 'all':
          $scope.tasks = todoFactory.getAllTasks();
          break;
        case 'active':
          $scope.tasks = todoFactory.getActiveTasks();
          break;
        case 'done':
          $scope.tasks = todoFactory.getDoneTasks();
          break;
        default:
          $scope.tasks = todoFactory.getAllTasks();
      }
    }

    function updateView(type) {
      $scope.listTitle = type[0].toUpperCase() + type.slice(1);
      $scope.taskType = type;
    }

    $scope.removeTask = function(task) {

      if (window.confirm('Are you sure you want to delete the task "' + task.text + '"?')) {
     
        todoFactory.removeTask(task);

        updateList();
      }
    };

    $scope.toggleListItems = function(task) {
      updateList();
    };

    $scope.editTask = function(id) {
      $location.path('/editTask/' + id);
    };

    $scope.getAllTasks = function() {
      $scope.tasks = todoFactory.getAllTasks();
      
      updateView('all');
    };

    $scope.getActiveTasks = function() {
      $scope.tasks = todoFactory.getActiveTasks();

      updateView('active');
    };

    $scope.getDoneTasks = function() {
      $scope.tasks = todoFactory.getDoneTasks();

      updateView('done');
    };
  }
]);
