angular.module('toDoApp').factory("todoFactory", function(dataService) {
  
  var tasksList = dataService.query();

  return {
    getAllTasks: function() {
      return tasksList;
    },
    getActiveTasks: function() {
      return tasksList.filter(task => task.done === false);
    },
    getDoneTasks: function() {
      return tasksList.filter(task => task.done === true);
    },
    addTask: function(task) {
      tasksList.push(task);
    },
    toggleTaskStatus: function(task) {
      tasksList[task].done = !tasksList[task].done;
    },
    removeTask: function(index) {
      tasksList.splice(tasksList.indexOf(index), 1);
    },
    findTask: function(index) {
      return tasksList[index];
    },
    updateTask: function(index, task) {
      tasksList[index] = task;
    }
  };
});
