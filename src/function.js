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

export const editTask = (index, value) => {
  const afterEdit = JSON.parse(localStorage.getItem('tasks')).map(
    (task, currentIndex) => {
      if (index === currentIndex) task.description = value;
      return task;
    },
  );
  localStorage.setItem('tasks', JSON.stringify(afterEdit));
};

export const deleteTask = (index) => {
  const filteredTasks = JSON.parse(localStorage.getItem('tasks'))
    .filter((task) => task.index !== index)
    .map((task, index) => {
      task.index = index + 1;
      return task;
    });
  localStorage.setItem('tasks', JSON.stringify(filteredTasks));
};

export const clearCompleted = () => {
  const notCompletedTasks = JSON.parse(localStorage.getItem('tasks'))
    .filter((task) => !task.completed)
    .map((task, index) => {
      task.index = index + 1;
      return task;
    });

  localStorage.setItem('tasks', JSON.stringify(notCompletedTasks));
  window.location.reload();
};
