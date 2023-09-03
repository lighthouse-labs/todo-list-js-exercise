// Define a task object to store each task's properties
const tasks = [];

// Create a new task and add it to the tasks array
function newTask(title, dueDate, priority, description, categories) {
  const task = {
    title: title,
    completed: false,
    dueDate: dueDate,
    priority: priority,
    description: description,
    categories: categories
  };
  tasks.push(task);
}

// Mark a task as complete
function completeTask(taskIndex) {
  if (taskIndex >= 0 && taskIndex < tasks.length) {
    tasks[taskIndex].completed = true;
  } else {
    console.log("Invalid task index.");
  }
}

// Print the state of a task
function logTaskState(taskIndex) {
  if (taskIndex >= 0 && taskIndex < tasks.length) {
    const task = tasks[taskIndex];
    console.log(`Title: ${task.title}`);
    console.log(`Description: ${task.description}`);
    console.log(`Due Date: ${task.dueDate}`);
    console.log(`Priority: ${task.priority}`);
    console.log(`Categories: ${task.categories}`);
    console.log(`Completed: ${task.completed ? "Yes" : "No"}`);
  } else {
    console.log("Invalid task index.");
  }
}

// DRIVER CODE BELOW

newTask("Clean Cat Litter", "2023-09-10", "Medium", "Scoop the cat litter box", ["Chores", "Pets"]);
newTask("Do Laundry", "2023-09-15", "High", "Wash and fold the laundry", ["Chores"]);

logTaskState(0);
completeTask(0);
logTaskState(0);
