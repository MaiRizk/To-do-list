// eslint-disable-next-line import/prefer-default-export
export const editTask = {
  init(list, newDescription, index) {
    const pDescription = document.querySelector('#list li input');
    pDescription.addEventListener('keydown', () => {
      this.instance(list, newDescription, index);
    });
  },
  instance(list, newDescription, index) {
    list[index].description = newDescription;
    localStorage.setItem('task', JSON.stringify(list));
  },
};