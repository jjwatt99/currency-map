import React from 'react';
import ItemListEntry from './ItemListEntry.jsx'

var ItemList = (props) => (
  <div>
    {props.currencies.map(currency =>
    	<ItemListEntry
    		currency={currency}
    	/>
    )}
  </div>
);

export default ItemList;