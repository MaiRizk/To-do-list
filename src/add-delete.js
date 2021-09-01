function addTask(activities, description) {
    const newActivity = { description, index: activities.length, completed: false };
    activities.push(newActivity);
    return activities;
  }

  function deleteTask(index) {
      let activities = [];
    activities.splice(index, 1);
    activities = activities.filter((Obj, index) => {
      Obj.index = index;
      return true;
    });
    return activities;
  }

module.exports = addTask
module.exports = deleteTask