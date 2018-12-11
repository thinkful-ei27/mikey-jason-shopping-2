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

  const findById = function(id){
    store.items.find(function(item){
      Object.values(item);
      if(id === item.id){
        return item;
      }
      return item;
    });
    
  };

  const addItem = function(name){
    try { 
      Item.validateName(name);
      store.items.push(Item.create(name));
      console.log('addItem ran');
    } catch(error) {
      console.log('Enter a valid item {error.message}');
    }
  };
  const findAndToggleChecked = function(id){
    let item = (this.findById(id));
    console.log(item);
    let checkStatus = this.checked;
    (checkStatus === true) ? checkStatus = false : checkStatus = true;
  };

  const findAndUpdateName = (function(idNum, newName){
    console.log('findAndUpdateName ran');
    try {
      Item.validateName(newName);
      // set variable to the value of 
      findById(idNum).name = newName;
    } catch(error) {
      console.log('Enter a valid item {error.message}');
    }
  });

  const findAndDelete = function(id){
    const item = store.findById(id);
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
