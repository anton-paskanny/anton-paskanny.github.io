angular.module('tasksLists').component('tasksList', {
  templateUrl: '/templates/tasksList.html',
  controller: function(todoFactory, $scope) {

    $scope.tasks = todoFactory.getTasks();
    $scope.doneTasks = todoFactory.getDoneTasks();

    $scope.newTask = {
      text: '',
      date: '',
      done: false
    };

    $scope.addTask = function() {
      if ($scope.newTask.text && $scope.newTask.date) {

        todoFactory.addTask($scope.newTask);
        // $scope.newTask = {
        //   text: '',
        //   date: '',
        //   done: false
        // };
        $scope.tasks = todoFactory.getTasks();
      }
    };

    $scope.removeTask = function(task) {
      todoFactory.removeTask(task);

      // update tasks
      $scope.tasks = todoFactory.getTasks();
      $scope.doneTasks = todoFactory.getDoneTasks();
    }
  }
})
