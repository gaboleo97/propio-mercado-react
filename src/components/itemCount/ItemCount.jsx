import {useState, useEffect} from "react";
import "./ItemCount.css";



export const ItemCount = ({stock,initial,onAdd}) => {

    const [Count, setCount] = useState(initial);

    const increment = () =>{        
        if (Count < stock) {
            setCount(Count + 1) 
        }else{
            alert("limite de Items Alcanzado")
            console.log('limite alcanzado')
        }        
    }
    const decrement = () =>{        
        if (Count > initial) {
            setCount(Count - 1) 
        }else{
            alert("no puedes tener menos de 0 items")
            console.log('limite negativo alcanzado')
        }        
    }
   

  return (    
    <div>
        <p>Cantidad: {Count}</p>
        <button disabled={Count === stock} onClick={increment}> + </button>
        <button disabled={Count <= 0} onClick={decrement}> - </button>
        <button onClick={() => onAdd(Count)}> Agregar al Carrito</button>
    </div>
  );
};

