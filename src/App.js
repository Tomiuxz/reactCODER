import logo from "./logo.svg";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Navbar />
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Welcome to Gaming Gods!</p>
			</header>
		</div>
	);
}

export default App;
