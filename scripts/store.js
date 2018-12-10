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
  const findById =  store.items.find(function(idNum){ 
    return idNum === items.id;});
  const addItem = function(name){
    try{ Item.validateName(name);
      this.items.push(Item.create(name));
    } 
    catch(error){
      console.log('Enter a valid item {error.message}');
    }
  };


  return {
    items,
    hideCheckedItems,
    searchTerm
  };


}());
