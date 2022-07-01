// CSS
import './App.css';
// DEPENDENCYS
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react"
// COMPONENTS
import { Navigation } from "./components/navBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
// VIEWS
import { Home } from './views/Home/Home';
import { Products } from './views/Products/Products';
import { About } from './views/About/About';
import { Contact } from './views/Contact/Contact';

import { getProductById, getProducts, getProductos, getProductByCategory} from "./data/asyncMock"
import { Cart } from './components/Cart/Cart';


function App(promps) {
  // const [item, setItem] = useState([])
  // const [category, setCategory] = useState('')

  //   useEffect(() => {
  //     getProductByCategory()
  //           .then(res => setCategory(res))
  //           .catch(err => console.log(err))
  //   }, [])
  
    
  //   console.log("categoria:", category)
    // console.log("item:", item)
  return (
    <Router>
       <div className="App">
      <header className="App-header">
        <Navigation/> 
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Products' element={<Products/>}/>
          <Route path='/Products' element={<Products/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/description/:id' element={<ItemDetailContainer />}/>
          <Route path='/Cart' element={<Cart />}/>
        </Routes>    
      </header>
   
    </div>
    </Router>
   
  );
}

export default App;
