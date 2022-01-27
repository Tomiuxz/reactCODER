import React from "react";

const Item = ({ id, name, stock, category, price, img }) => {
	return (
		<>
      <img src={img} alt="" />
			<h1>{name}</h1>
      <h4>{category}</h4>
      <h4>Precio: ${price}</h4>
      <h4>Stock: {stock}</h4>
		</>
	);
};

export default Item;
