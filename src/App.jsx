import Navbar from "./components/Navbar/Navbar";
import { ItemListContainer } from "./components/CartWidget/ItemListContainer";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Navbar />
			<div className="card">
				<ItemListContainer />
			</div>
			<header className="App-header">
				<h2>Welcome to Gaming Gods!</h2>
			</header>
		</div>
	);
}

function Card(props) {
	return (
		<div className="card">
			<div className="card__body">
				<img src={props.img} alt="" />
				<h2 className="card__title">Mouse Zeus</h2>
				<p className="card_desc"></p>
			</div>
			<button className="card__btn"></button>
		</div>
	);
}

export default App;
