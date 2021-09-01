function addTask(activities, description) {
  const newActivity = { description, index: activities.length, completed: false };
  activities.push(newActivity);
  return activities;
}
export { addTask };
