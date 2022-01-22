import React from "react";
import ItemCounter from "../ItemCounter/ItemCounter";

export const ItemListContainer = ({}) => {
	// console.log(props);

  function onAdd (cant) {
    console.log(cant);
  }

	return (
		<div>
			<h1>ITEMLIST</h1>
			<ItemCounter initial={1} stock={5} onAdd={onAdd} />
		</div>
	);
};

export default ItemListContainer;
