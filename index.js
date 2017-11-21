// Arrays to keep track of each task's state
var taskTitles = [];
var taskComplete = []; 

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title) {
  taskTitles.push(title);
  taskComplete.push(false);
}

