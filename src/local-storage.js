function saveDataLocalStorage(activities) {
  localStorage.setItem('activities', JSON.stringify(activities));
}

function loadDataLocalStorage() {
  const activities = [];

  return JSON.parse(localStorage.getItem('activities')) || activities;
}

module.exports = saveDataLocalStorage
module.exports = loadDataLocalStorage
