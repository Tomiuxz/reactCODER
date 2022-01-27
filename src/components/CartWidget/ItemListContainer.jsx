import React, { useEffect, useState } from "react";
import ItemCounter from "../ItemCounter/ItemCounter";
import ItemList from "../ItemList/ItemList";
import getProducts from "../../helpers/getProducts";

export const ItemListContainer = ({ greeting }) => {
	const [listProducts, setListProducts] = useState([]);

	useEffect(() => {
		getProducts()
			.then((data) => setListProducts(data))
			.catch((err) => console.log(err));
	}, []);

	function onAdd(cant) {
		console.log(cant);
	}

	return (
		<div>
			<ItemList listProducts={listProducts} />
			<ItemCounter initial={1} stock={5} onAdd={onAdd} />
		</div>
	);
};

export default ItemListContainer;
