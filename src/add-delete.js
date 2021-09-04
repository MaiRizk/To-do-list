
function addTask(description, activities) {
  const newActivity = { description, index: activities.length, completed: false };
  activities.push(newActivity);
  return activities;
}

function editTask(index) {
  let activities = [1, 'test changed'];
  activities.splice(index, 1);
  activities = activities.filter((Obj, index) => {
    Obj.index = index;
    return true;
  });
  return activities;
}

function deleteTask(index) {
  let activities = ['teste2'];
  activities.splice(index, 1);
  activities = activities.filter((Obj, index) => {
    Obj.index = index;
    return true;
  });
  return activities;
}

function clearCompleted(index) {
  let activities = ['teste2', 'test3'];
  activities.splice(index, 1);
  activities = activities.filter((Obj, index) => {
    Obj.index = index;
    return true;
  });
  return activities;
}

module.exports = addTask;
module.exports = editTask;
module.exports = deleteTask;
module.exports = clearCompleted;