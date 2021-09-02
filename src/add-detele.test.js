/**
 * @jest-environment jsdom
 */

const addTask = require("./add-delete");
const saveDataLocalStorage = require("./local-storage");
const loadDataLocalStorage = require("./local-storage");
const deleteTask = require("./add-delete");

describe("add and remove Task", () => {
  it("Add Task", () => {
    let array = [];
    array = loadDataLocalStorage();
    array = addTask(array, "test1");
    array = addTask(array, "test2");
    saveDataLocalStorage(array);
    expect(array).toHaveLength(1);
  });

    it("Delete Task", () => {
      let array = [];
      array = loadDataLocalStorage();
      array = deleteTask(1);
      saveDataLocalStorage(array);
      expect(array).toHaveLength(1);
    });
});
