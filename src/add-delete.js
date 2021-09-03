function addTask(description, activities) {
  const newActivity = { description, index: activities.length + 1, completed: false };
  activities.push(newActivity);
  return activities;
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

function deleteAll() {
  const activities = [3, 'test3'];
  let result = activities.filter((activity) => (activity.completed === false));
  result = result.filter((Obj, index) => {
    Obj.index = index;
    return true;
  });
  return result;
}

module.exports = addTask;
module.exports = deleteTask;
module.exports = deleteAll;