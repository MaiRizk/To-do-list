function addTask(description, activities) {
  const newActivity = { description, index: activities.length, completed: false };
  activities.push(newActivity);
  return activities;
}

function editTask(index, value) {
  const activities = [2, 'test4'];
  const afterEdit = activities.map(
    (activity, currentIndex) => {
      if (index === currentIndex) activity.description = value;
      return activity;
    },
  );
}

function deleteTask(index) {
  let activities = [2, 'teste3'];
  activities.splice(index, 1);
  activities = activities.filter((Obj, index) => {
    Obj.index = index;
    return true;
  });
  return activities;
}

module.exports = addTask;
module.exports = deleteTask;
module.exports = editTask;