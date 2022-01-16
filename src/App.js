import logo from "./logo.svg";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { ItemListContainer } from "./components/CartWidget/ItemListContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greetings="Hola!" />
      <header className="App-header">
        <h2>Welcome to Gaming Gods!</h2>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
