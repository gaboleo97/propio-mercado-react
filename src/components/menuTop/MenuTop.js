import "./MenuTop.css";
import CartWidget from "../cartWidget/CartWidget.js";
const MenuTop = () => {
  return (    
    <div className="">
        <a className='' href="#">
        <CartWidget/>
        </a>      
    </div>
  );
};

export default CartWidget;