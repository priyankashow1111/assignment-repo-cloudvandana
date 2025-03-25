document.addEventListener('DOMContentLoaded', function() {
  const taskInput = document.getElementById('taskInput');
  const addTaskBtn = document.getElementById('addTaskBtn');
  const taskList = document.getElementById('taskList');

  // Add task function
  function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText) {
          const taskItem = document.createElement('li');
          taskItem.className = 'task-item';
          
          const taskSpan = document.createElement('span');
          taskSpan.textContent = taskText;
          
          const deleteBtn = document.createElement('button');
          deleteBtn.className = 'delete-btn';
          deleteBtn.textContent = 'Delete';
          deleteBtn.addEventListener('click', function() {
              taskList.removeChild(taskItem);
          });
          
          taskItem.appendChild(taskSpan);
          taskItem.appendChild(deleteBtn);
          taskList.appendChild(taskItem);
          
          taskInput.value = '';
      }
  }

  // Add task when button is clicked
  addTaskBtn.addEventListener('click', addTask);

  // Add task when Enter key is pressed
  taskInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
          addTask();
      }
  });
});