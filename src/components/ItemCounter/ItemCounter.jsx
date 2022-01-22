import { useState } from "react";

function ItemCounter({ initial, stock, onAdd }) {
	const [contador, setcontador] = useState(initial);

	const handleAumentar = () => {
		if (contador < stock) {
			setcontador(contador + 1);
		}
	};

	const handleRestar = () => {
		if (contador > initial) {
			setcontador(contador - 1);
		}
	};

	const agregar = () => {
		onAdd(contador);
	};

	return (
		<div className="block">
			<button className="btn btn-medium" onClick={handleAumentar}>{" "} + {" "}</button>
			{contador}
			<button className="btn btn-medium" onClick={handleRestar}>{" "} - {" "}</button>
			<br></br>
			<button className="btn btn--primary btn-medium" onClick={agregar}>Agregar al carrito</button>
		</div>
	);
}

export default ItemCounter;
