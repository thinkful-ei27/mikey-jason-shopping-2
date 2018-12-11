/*global store, cuid, Item */
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
    const commodity =  store.items.find(item => item.id === id);
    return commodity;
  };
  
  const addItem = function(name){
    try {
      Item.validateName(name);
      this.items.push(Item.create(name));
    }
    catch(error) {
      console.log( 'Cannot add item: {error.message}');
    }
  };

  const findAndToggleChecked = function(id){
    let item = this.findById(id);
    item.checked === true ? item.checked = false : item.checked = true;
  };

  const findAndUpdateName = function(id , newName){
    try {
      Item.validateName(name);
      let item = this.findById(id);
      item.name = newName;
    }
    catch(error) {
      console.log( 'Cannot valdiate name: {error.message}');
    }
  };

  const findAndDelete = function(id){
    const index = this.items.findIndex(item => item.id === id);
    this.items.splice(index, 1);
  };

  const toggleCheckedFilter = function(){
    store.hideCheckedItems = !store.hideCheckedItems;
  };

  const setSearchTerm = function(val){
    store.searchTerm = val;
  };

  return {
    items,
    hideCheckedItems,
    searchTerm,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter,
    setSearchTerm

  };


  

}());
