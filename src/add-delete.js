function addTask(description, activities) {
  const newActivity = { description, index: activities.length, completed: false };
  activities.push(newActivity);
  return activities;
}

function editTask (description) {
    let activities = [2, 'teste3'];
//   const newActivity = { description };
  activities.splice(description, 1);
//   description.push(newActivity);
  return description;
}

function deleteTask(index) {
  let activities = [2, 'teste3'];
  activities.splice(index, 1);
  activities = activities.filter((Obj, index) => {
    Obj.index = index;
    return true;
  });
  return activities;
};

module.exports = addTask;
module.exports = deleteTask;
module.exports = editTask;