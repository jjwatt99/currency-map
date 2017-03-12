import React from 'react';

var ItemListEntry = (props) => {
  var change = props.currency.Mid - props.currency.Previous;
  change = change.toString();
  console.log('fixing change')
  if (change[0] === '-') {
  	change = change.slice(0, 6);
  } else {
  	change = change.slice(0, 5);
  }
  return (
	  <div id="entry">
	    <div>{props.currency.Symbol}</div>
	    <div>{props.currency.Mid}</div>
	    <div>{change}</div>
	  </div>
	);
};

export default ItemListEntry;