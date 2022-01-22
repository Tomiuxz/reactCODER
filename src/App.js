import Navbar from "./components/Navbar/Navbar";
import { ItemListContainer } from "./components/CartWidget/ItemListContainer";
import "./App.css";


function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greetings="Hola!" />
      <header className="App-header">
        <h2>Welcome to Gaming Gods!</h2>
      </header>
    </div>
  );
}

export default App;
