const toDoItem = document.getElementById("task");

const listItems = [];
const itemPrinter = document.getElementById("items");

function addItem() {
  listItems.push(toDoItem.value);
  render();
}

function render() {
  //clear out all list items
  itemPrinter.innerHTML = "";

  //clear out textbox
  toDoItem.value = "";

  //reiterate all items from list
  for (let i = 0; i < listItems.length; i++) {
    itemPrinter.innerHTML +=
      `<div class="iter-item"><input type="checkbox" id=` +
      listItems[i].toString() +
      `name=` +
      listItems[i].toString() +
      ` /> <label for=` +
      listItems[i].toString() +
      `>` +
      listItems[i].toString() +
      `</label>` +
      `<span onclick="deleteItem('` +
      listItems[i].toString() +
      `')" class="delete-icon">Delete</span></div>`;
  }
}

function deleteItem(deleter) {
  const index = listItems.indexOf(deleter);

  listItems.splice(index, 1);

  render();
}
