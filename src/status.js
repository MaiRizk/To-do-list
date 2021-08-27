const onCheck = (index) => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  if (tasks.length) {
    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
};

export default onCheck;
