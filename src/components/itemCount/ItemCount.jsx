import {useState} from "react";
import "./ItemCount.css";



export const ItemCount = ({stock,initial, name, description, id}) => {

    const [Count, setCount] = useState(initial);
    const [Detail, setDetail] = useState([]) 

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
   const onAdd = () =>{
        if (Count >= initial) {            
            setDetail([{id},{name},{Count},{description}])
             console.log(Detail) 
        }else{
            console.log(`error`)
        }
   }
    

  return (    
    <div>
        <p>Cantidad: {Count}</p>
        <button disabled={Count === stock} onClick={increment}> + </button>
        <button disabled={Count <= 0} onClick={decrement}> - </button>
        <button onClick={onAdd}> Agregar al Carrito</button>
    </div>
  );
};

