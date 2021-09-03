/**
 * @jest-environment jsdom
 */

// const addTask = require('./add-delete');

import { mockHtml } from './mockhtml.js';
import { addTask } from './function.js';
/* const addTask = require('./function');
const saveDataLocalStorage = require('./local-storage');
const loadDataLocalStorage = require('./local-storage');
const deleteTask = require('./add-delete');
const editTask = require('./add-delete');
const clearCompleted = require('./add-delete');
const mockHtml = require('./mockhtml'); */

describe('add and remove Task', () => {
  it('Add Task', () => {
    document.body.innerHTML = mockHtml;
    addTask(1, 'test1');
    // saveDataLocalStorage(array);
    const list = document.querySelectorAll('#list li');
    expect(list).toHaveLength(1);
  });

/*   it('Update Task', () => {
    let array = ['test changed'];
    array = loadDataLocalStorage();
    array = editTask(1, 'test changed');
    saveDataLocalStorage(array);
    expect(array).toHaveLength(1);
  });

  it('Delete Task', () => {
    let array = [];
    array = loadDataLocalStorage();
    array = deleteTask(1);
    saveDataLocalStorage(array);
    expect(array).toHaveLength(1);
  });

  it('Delete All Tasks', () => {
    let array = [];
    array = loadDataLocalStorage();
    array = clearCompleted(1);
    saveDataLocalStorage(array);
    expect(array).toHaveLength(1);
  }); */
});
