let tasks = [];

// function to generate unique IDs for tasks
function generateId() {
  return tasks.length === 0 ? 1 : Math.max(...tasks.map(task => task.id)) + 1;
}

// function to add a new task
function addTask(name, description) {
  const task = {
    id: generateId(),
    name: name,
    description: description
  };
  tasks.push(task);
  console.log('Task added:', task);
}

// function to view all tasks
function viewTasks() {
  if (tasks.length === 0) {
    console.log('No tasks available.');
  } else {
    console.log('All Tasks:');
    tasks.forEach(task => {
      console.log(`ID: ${task.id}, Name: ${task.name}, Description: ${task.description}`);
    });
  }
}

// function to update a task by ID
function updateTask(id, newName, newDescription) {
  const taskIndex = tasks.findIndex(task => task.id === id);
  
  if (taskIndex !== -1) {
    tasks[taskIndex].name = newName;
    tasks[taskIndex].description = newDescription;
    console.log('Task updated:', tasks[taskIndex]);
  } else {
    console.log('Task not found.');
  }
}

// function to delete a task by ID
function deleteTask(id) {
  const taskIndex = tasks.findIndex(task => task.id === id);
  
  if (taskIndex !== -1) {
    const deletedTask = tasks.splice(taskIndex, 1);
    console.log('Task deleted:', deletedTask[0]);
  } else {
    console.log('Task not found.');
  }
}

// example 
addTask('Learning table tennis', 'Do the basics routine');
addTask('Build a program', 'Create a CRUD application in Node.js');
viewTasks();
updateTask(1, 'Learn JavaScript', 'Complete JavaScript advanced topics');
viewTasks();
deleteTask(2);
viewTasks();
