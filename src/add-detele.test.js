/**
* @jest-environment jsdom
*/
/* eslint-disable linebreak-style */
import { addTask } from './src/add-delete.js';
// import { displayTasks } from '../src/display-task.js';
import { saveDataLocalStorage, loadDataLocalStorage } from './src/local-storage.js';

document.body.innerHTML = `
<li class="task-list">
</li>
`;

const ul = document.querySelector('#list');

describe('add and remove Task', () => {
  it('Add Task', () => {
    let array = [];
    array = loadDataLocalStorage();
    array = addTask(array, 'test1');
    array = addTask(array, 'test2');
    saveDataLocalStorage(array);
    // displayTasks(ul);
    expect(ul.childNodes).toHaveLength(2);
  })
}
);