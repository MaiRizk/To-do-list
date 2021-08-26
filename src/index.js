import './style.css';

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
  li.appendChild(document.createTextNode(task.description));
  ul.appendChild(li);
});
