import './style.css';
import onCheck from './status';

const tasks = JSON.parse(localStorage.getItem('tasks')) || [
  {
    description: 'Complete first task',
    completed: false,
    index: 0,
  },
  {
    description: 'Complete second task',
    completed: false,
    index: 1,
  },
];

window.localStorage.setItem('tasks', JSON.stringify(tasks));

const ul = document.getElementById('list');

tasks.forEach((task) => {
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = task.completed;
  li.appendChild(checkbox);
  li.appendChild(document.createTextNode(task.description));
  ul.appendChild(li);
  checkbox.addEventListener('change', () => {
    onCheck(task.index);
  });
});
