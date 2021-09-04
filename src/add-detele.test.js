/**
 * @jest-environment jsdom
 */

// const addTask = require('./add-delete');

import { mockHtml } from './mockhtml.js';
import { addTask } from './function.js';
import { editTask } from './edit-task-mock.js';
import { listItems } from './index'
/* const addTask = require('./function');
const saveDataLocalStorage = require('./local-storage');
const loadDataLocalStorage = require('./local-storage');
const deleteTask = require('./add-delete');
const editTask = require('./add-delete');
const clearCompleted = require('./add-delete');
const mockHtml = require('./mockhtml'); */

describe('add and remove Task', () => {
  it('Add Task to localStorage', () => {
    document.body.innerHTML = mockHtml; 
    addTask();
    expect(JSON.parse(localStorage.getItem('tasks'))).toHaveLength(1);
  });

  it('Add li task item', () => {
    document.body.innerHTML = mockHtml; 
    addTask();
    listItems();
    const list = document.querySelectorAll('#list li');
    expect(list).toHaveLength(2);
  });
});

describe('Edit task description value', () => {
  test('change first task description value to Feed cat in local Storage',
    () => {
      const instanceMock = jest.spyOn(editTask, 'instance');
      const list = JSON.parse(localStorage.getItem('tasks'));
      const pDescription = document.querySelector('#list li input');

      pDescription.addEventListener = jest
        .fn()
        .mockImplementationOnce((event, callback) => {
          callback();
        });

      editTask.init(list, 'Feed Cat', 0);
      expect(pDescription.addEventListener).toBeCalledWith(
        'keydown',
        expect.any(Function),
      );
      expect(instanceMock).toBeCalledTimes(1);
      expect(JSON.parse(localStorage.getItem('task'))[0].description).toBe('Feed Cat');
    });
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
  });

*/
