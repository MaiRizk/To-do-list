export const addTask = () => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const descriptionInput = document.querySelector('#description');
  const task = {
    description: descriptionInput.value,
    completed: false,
    index: tasks.length + 1,
  };

  localStorage.setItem('tasks', JSON.stringify([...tasks, task]));
  document.querySelector('#description').value = '';
  window.location.reload();
};