import logo from './logo.svg';
import './App.css';
import Navigation from "./components/navBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation></Navigation>
        <h1> Propio Mercado Ecommerce </h1>
        <h3> comming soon</h3>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
