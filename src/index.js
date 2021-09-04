// import './style.css';
import { addTask, clearCompleted, deleteTask } from "./function";

import onCheck from "./status";

const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

window.localStorage.setItem("tasks", JSON.stringify(tasks));

const addTaskToUI = (ul, task) => {
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = task.completed;
  li.appendChild(checkbox);
  const input = document.createElement("input");
  input.value = task.description;
  li.appendChild(input);
  const remove = document.createElement("button");
  remove.innerHTML = '<i class="fas fa-trash-alt"></i>';
  li.appendChild(remove);
  ul.appendChild(li);

  checkbox.addEventListener("change", () => {
    onCheck(task.index - 1);
  });
  remove.addEventListener("click", () => {
    li.parentNode.removeChild(li);
    deleteTask(task.index);
  });
};

export function listItems() {
  const ul = document.getElementById('list');
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks.forEach((task) => {
    addTaskToUI(ul, task);
  });
}

listItems();





document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("description").addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });
  document.getElementById("clear-all").addEventListener("click", () => {
    clearCompleted();
  });
});
