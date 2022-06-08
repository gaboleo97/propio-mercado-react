import logo from './logo.svg';
import "./NavBar.css";
import CartWidget from '../cartWidget/CartWidget';

const Navigation = () => {
  return (    
    <nav className="header__nav">
        <a className='header__logo' href="#">
        <img src={logo} className="App-logo" alt="logo" /> 
        </a>
      <ul className="header__ul">
        <li className="header__li"><a className="header__a" href="#">Inicio</a></li>
        <li className="header__li"><a className="header__a" href="#">Productos</a></li>
        <li className="header__li"><a className="header__a" href="#">Nosotros</a></li>
        <li className="header__li"><a className="header__a" href="#">Contactanos</a></li>
        <li className="header__li"><a className="header__a" href="#"><CartWidget/></a></li>
      </ul>
    </nav>
  );
};

export default Navigation;