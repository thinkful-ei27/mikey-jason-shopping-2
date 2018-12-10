/* global $, shoppingList, Item */
'use strict';

// eslint-disable-next-line no-unused-vars;

const itemNames = [ '', 'apples', 'pears' ];
itemNames.forEach(name => {
  try {
    Item.validateName(name);
    store.items.push(Item.create(name));
  } catch(error) {
    console.log('Cannot add item: ' + error.message);
  }
});
shoppingList.render();
$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
 
});
