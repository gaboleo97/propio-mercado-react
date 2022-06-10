import logo from './logo.svg';
import './App.css';
import Navigation from "./components/navBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

function App(promps) {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation/> 
        <ItemListContainer item1='item_1' item2='item_2' item3='item_3' item4='item_4'/>       
        <h1> Propio Mercado Ecommerce </h1>
        <h3> comming soon</h3>       
      </header>
    </div>
  );
}

export default App;
