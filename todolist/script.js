let todoInput = document.getElementById("todoInput");
let addBtn = document.getElementById("addBtn");
let output = document.querySelector(".output");
let message = document.querySelector(".message-container");
let pendingTasks = document.getElementById("pending-tasks");
let clearAllBtn = document.getElementById("clearAll");

// Update pending tasks count
function updatePendingTasksCount() {
  const count = document.querySelectorAll(".todo").length;
  pendingTasks.textContent = count;
}

function getTodo(value) {
  let todo = document.createElement("div");
  let textEl = document.createElement("span");
  textEl.innerText = value;
  todo.appendChild(textEl);
  message.classList.toggle("success");
  message.textContent = "Item Added";

  setTimeout(() => {
    message.classList.toggle("success");
  }, 2000);

  let closeEl = document.createElement("span");
  closeEl.innerHTML = "&times;";
  closeEl.classList.add("delete");

  closeEl.addEventListener("click", () => {
    output.removeChild(todo);
    message.classList.toggle("error");
    message.textContent = "Item Deleted";
    setTimeout(() => {
      message.classList.toggle("error");
    }, 2000);
    updatePendingTasksCount(); // Update count after removing a todo
  });

  todo.appendChild(closeEl);
  todo.classList.add("todo");

  // Update count after adding the todo to DOM
  setTimeout(() => {
    updatePendingTasksCount();
  }, 0);

  return todo;
}

// Add todo when clicking the add button
addBtn.addEventListener("click", () => {
  let value = todoInput.value;
  if (!value.trim()) return;
  output.appendChild(getTodo(value));
  todoInput.value = "";
  updatePendingTasksCount(); // Update count immediately after adding
});

// Add todo when pressing Enter key
todoInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    let value = todoInput.value;
    if (!value.trim()) return;
    output.appendChild(getTodo(value));
    todoInput.value = "";
    updatePendingTasksCount(); // Update count immediately after adding
  }
});

// Clear all todos
clearAllBtn.addEventListener("click", () => {
  output.innerHTML = "";
  message.classList.toggle("error");
  message.textContent = "All Items Deleted";
  setTimeout(() => {
    message.classList.toggle("error");
  }, 2000);
  updatePendingTasksCount(); // Update count after clearing
});

// Initialize pending tasks count on page load
document.addEventListener("DOMContentLoaded", function () {
  updatePendingTasksCount();
});
