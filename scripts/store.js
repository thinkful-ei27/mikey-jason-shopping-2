/*global store, cuid, Item*/
'use strict';

const store = (function(){

  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  const hideCheckedItems = false; 
  const searchTerm = '';

  const findById = (function(id) {
    const foundItem = items.find(item => item.id === id);
    return foundItem;
  }

  const addItem = function(name){
    console.log('addItem ran');
    try { 
      Item.validateName(name);
      Item.create(name);
      items.push(Item.create(name));
    } catch(error) {
      console.log('Enter a valid item {error.message}');
    }
    shoppingList.render();
  };
    const findAndToggleChecked = function(id){
      this.findById(id).checked = !this.findById(id).checked;
    };

    const findAndUpdateName = (function(idNum, newName){
      console.log('findAndUpdateName ran');
      try {
        Item.validateName(newName);
        // set variable to the value of 
        items.findById(idNum).name = newName;
      } catch(error) {
        console.log('Enter a valid item {error.message}');
      }
    });

    const findAndDelete = function(id){
      const item = items.findById(id);
      const deletingIndex = items.findIndex(item);
      items.splice(deletingIndex, 1);
    };

  return {
    items,
    hideCheckedItems,
    searchTerm,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete
  };


}());
