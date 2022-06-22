
import './App.css';
import Navigation from "./components/navBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

function App(promps) {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation/> 
             
        <h1> Propio Mercado Ecommerce </h1>
        <h3> comming soon</h3>       
      </header>
      <ItemListContainer /> 
      <ItemDetailContainer />
    </div>
  );
}

export default App;
