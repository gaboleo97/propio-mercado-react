// IMAGES
import logo from './logo.svg';
// CSS
import "./NavBar.css";
// COMPONENTS
import CartWidget from '../cartWidget/CartWidget';
import ItemCount from '../itemCount/ItemCount';
import {SubMenu} from './SubMenu/SubMenu'
// DEPENDENCYS
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (    
    <nav className="header__nav">
        <a className='header__logo' href="#">
        <img src={logo} className="App-logo" alt="logo" /> 
        </a>
      <ul className="header__ul">
        <Link to="/" className="header__li">Home</Link>
        <Link to="/Products" className="header__li">Productos</Link>
        <Link to="/Products"></Link>
        {/* <Link to="/Remeras" className="header__li">Remeras</Link>
        <Link to="/Gorras" className="header__li">Gorras</Link>
        <Link to="/Zapatillas" className="header__li">Zapatillas</Link> */}
        <Link to="/About" className="header__li">Nosotros</Link>
        <Link to="/Contact" className="header__li">Contacto</Link>
        <Link to="/" className="header__li"><CartWidget/></Link>
      </ul>
    </nav>
  );
};
