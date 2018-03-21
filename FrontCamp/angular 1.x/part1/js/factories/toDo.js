angular.module('toDoApp').factory("todoFactory", function(dataService) {
  
  var tasksList = dataService.query();

  // var tasksList = [
  //   {
  //     "id": 1,
  //     "text": "Clean room",
  //     "date": new Date("2015-01-05T09:05:05.035Z"),
  //     "done": false
  //   }, 
  //   {
  //     "id": 2,
  //     "text": "Buy food",
  //     "date": new Date("2017-01-07T10:05:05.035Z"),
  //     "done": false
  //   }, 
  //   {
  //     "id": 3,
  //     "text": "Study English",
  //     "date": new Date("2016-01-06T08:05:05.035Z"),
  //     "done": false
  //   }
  // ];

  function convertTaskDate(task) {
    var updatedTask = Object.assign({}, task);
    updatedTask.date = updatedTask.date.toJSON();

    return updatedTask;
  }

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
      var updatedTask = convertTaskDate(task);

      tasksList.push(updatedTask);
    },
    removeTask: function(task) {
      tasksList.splice(tasksList.indexOf(task), 1);
    },
    findTask: function(id) {
      for (var i = 0, length = tasksList.length; i < length; i++) {
        if (tasksList[i].id == id) {
          return tasksList[i];
        }
      }
      
      return null;
    },
    updateTask: function(id, task) {
      for (var i = 0, length = tasksList.length; i < length; i++) {
        if (tasksList[i].id == id) {
          var updatedTask = convertTaskDate(task);
          tasksList[i] = updatedTask;
          break;
        }
      };
    }
  };
});
