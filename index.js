
// why is this better.
// Encapsulation – Each task is an object with properties.
//  Methods –  Encapsulated functions inside each task object for better structure.
//  Task List Object –  Manages tasks efficiently.
//  List All Tasks –  Easily display all tasks at once.








// Task Factory Function




function createTask(title) {
  return {
    title: title,
    complete: false,
    
    // Method to mark task as complete
    completeTask() {
      this.complete = true;
    },
    
    // Method to log task state
    logState() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    }
  };
}

// Task List Manager
const taskManager = {
  tasks: [],

  // Add a new task
  addTask(title) {
    const task = createTask(title);
    this.tasks.push(task);
  },

  // Mark task as complete by index
  completeTask(index) {
    if (this.tasks[index]) {
      this.tasks[index].completeTask();
    }
  },

  // Log a specific task's state
  logTaskState(index) {
    if (this.tasks[index]) {
      this.tasks[index].logState();
    }
  },

  // List all tasks
  listAllTasks() {
    this.tasks.forEach(task => task.logState());
  }
};



taskManager.addTask("Clean Cat Litter");
taskManager.addTask("Do Laundry");

taskManager.logTaskState(0); // Clean Cat Litter has not been completed
taskManager.completeTask(0);
taskManager.logTaskState(0); // Clean Cat Litter has been completed

taskManager.listAllTasks(); // Logs all tasks
