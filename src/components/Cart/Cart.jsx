import React from 'react'
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
export const Cart = () => {
    const [cart, setCart, clear ,cantidad, addCart] = useContext(CartContext)
  return (
    <div>
    
      <h1>Cart</h1>

      {
      cart.map((producto) =>(
        <div key={producto.id}>
          <h3>{producto.name}</h3>
          <p>{producto.cantidad}</p>
        </div>
      ))
      }
    </div>
  )
}

