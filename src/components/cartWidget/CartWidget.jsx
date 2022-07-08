import "./CartWidget.css";

import { BsFillCartFill } from 'react-icons/bs';
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
 const CartWidget = () => {
  const [cart, setCart, clear ,cantidad, addCart] = useContext(CartContext)

  return (
    <div className="cartWidget">
      <BsFillCartFill />
      <p>{cantidad()}</p>
    </div>
  );
};

export default CartWidget;