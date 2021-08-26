import './style.css';
import onCheck from './status';

const tasks = [
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

const ul = document.getElementById('list');

tasks.forEach((task) => {
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.value = (task.completed);
  li.appendChild(checkbox);
  li.appendChild(document.createTextNode(task.description));
  ul.appendChild(li);
  checkbox.addEventListener('change', () => {
    onCheck(task);
  });
});

window.localStorage.setItem('task', JSON.stringify(tasks));