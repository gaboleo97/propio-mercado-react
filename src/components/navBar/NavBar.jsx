// IMAGES
import logo from './logo.svg';
// CSS
import "./NavBar.css";
// COMPONENTS
import CartWidget from '../cartWidget/CartWidget';
// DEPENDENCYS
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (    
    <nav className="header__nav">
        <Link to={"/"} className='header__logo'>
        <img src={logo} className="App-logo" alt="logo" /> 
        </Link>
      <ul className="header__ul">
        <Link to="/" className="header__li">Home</Link>
        <Link to="/Products" className="header__li">Productos</Link>
        <Link to="/Products"></Link>
        <Link to="/About" className="header__li">Nosotros</Link>
        <Link to="/Contact" className="header__li">Contacto</Link>
        <Link to="/" className="header__li"><CartWidget/></Link>
      </ul>
    </nav>
  );
};
