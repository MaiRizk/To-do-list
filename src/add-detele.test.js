/**
 * @jest-environment jsdom
 */

import { mockHtml } from './mockhtml';
import { addTask, deleteTask, clearCompleted } from './function';
import { editTask } from './edit-task-mock';
import { listItems } from './index';
import { onCheck } from './status';

describe('add Task', () => {
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
  test('change first task description value to Jest Change Test in local Storage',
    () => {
      const instanceMock = jest.spyOn(editTask, 'instance');
      const list = JSON.parse(localStorage.getItem('tasks'));
      const pDescription = document.querySelector('#list li input');

      pDescription.addEventListener = jest
        .fn()
        .mockImplementationOnce((event, callback) => {
          callback();
        });

      editTask.init(list, 'Jest Change Test', 0);
      expect(pDescription.addEventListener).toBeCalledWith(
        'keydown',
        expect.any(Function),
      );
      expect(instanceMock).toBeCalledTimes(1);
      expect(JSON.parse(localStorage.getItem('task'))[0].description).toBe('Jest Change Test');
    });
});

test('delete second item from the list', () => {
  deleteTask(1);
  const ul = document.getElementById('list');
  ul.innerHTML = '';
  listItems();
  const list = document.querySelectorAll('#list li');
  expect(list).toHaveLength(1);
});

describe('Update the completed status from tasks', () => {
  test('Changing the first item to complete true', () => {
    document.body.innerHTML = mockHtml;
    addTask();
    addTask();
    addTask();
    listItems();
    onCheck(0);
    expect(JSON.parse(localStorage.getItem('tasks'))[0].completed).toBeTruthy();
  });
});

describe('Delete all completed tasks', () => {
  test('Delete all completed tasks, in that case just the first one', () => {
    listItems();
    clearCompleted();
    expect(JSON.parse(localStorage.getItem('tasks'))).toHaveLength(3);
  });
});
