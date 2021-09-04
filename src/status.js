export const onCheck = (index) => {
  const tasks = JSON.parse(localStorage.getItem('tasks')).map(
    (item, currentIndex) => {
      if (index === currentIndex) item.completed = !item.completed;
      return item;
    },
  );
  localStorage.setItem('tasks', JSON.stringify(tasks));
};
