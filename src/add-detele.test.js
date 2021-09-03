/**
 * @jest-environment jsdom
 */

const addTask = require('./add-delete');
const saveDataLocalStorage = require('./local-storage');
const loadDataLocalStorage = require('./local-storage');
const deleteTask = require('./add-delete');
const deleteAll = require('./add-delete');

describe('add and remove Task', () => {
  it('Add Task', () => {
    let array = [];
    array = loadDataLocalStorage();
    array = addTask({ description: 'test1' }, { description: 'test2' });
    saveDataLocalStorage(array);
    expect(array).toHaveLength(2);
  });

  it('Delete Task', () => {
    let array = [];
    array = loadDataLocalStorage();
    array = deleteTask(1);
    saveDataLocalStorage(array);
    expect(array).toHaveLength(1);
  });

  it('Delete All Task', () => {
    let array = [];
    array = loadDataLocalStorage();
    array = addTask(array, 'test3');
    array = addTask(array, 'test4');
    array = deleteAll(array);
    saveDataLocalStorage(array);
    expect(array).toHaveLength(0);
  });
});
