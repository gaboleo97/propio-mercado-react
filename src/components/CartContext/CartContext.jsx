import React , { createContext, useState } from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail';

export const CartContext = createContext();


export const CartContextProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const cantidad = () =>{
		return cart.reduce((total,producto) => total + producto.cantidad, 0);
	}


    function addCart(producto, cantidad) {
    if(cantidad === 0){
      return;
    }
  
    let existe = isInCart(producto.id);
        
    if(existe) {

      let itemCart = cart.find(item => item.id === producto.id);
      itemCart.cantidad += cantidad;
      setCart([...cart]);

    }else {
      setCart([...cart, {...producto, cantidad}]);
    }
  }

  function isInCart(id){
    return cart.some(item => item.id === id);   
  }

	const clear = () => {
		alert(`Cantidad de items en nuestro carrito: ${cart.length}`);
	};

	// 3 - RETORNAMOS NUESTRO CONTEXT CON UN .PROVIDER
	return (
		<CartContext.Provider value={[cart, setCart, clear, cantidad, addCart]}>
			{/* 4 - PROPS.CHILDREN O BIEN CHILDREN */}
			{children}
		</CartContext.Provider>
	);
};


