import {useState} from "react";
import "./ItemCount.css";



const ItemCount = () => {

    const [Count,setCount] = useState(1);
    const increment = () =>{        
        if (Count < 10) {
            setCount(Count + 1) 
        }else{
            alert("limite de Items Alcanzado")
            console.log('limite alcanzado')
        }        
    }
    const decrement = () =>{        
        if (Count > 0) {
            setCount(Count - 1) 
        }else{
            alert("no puedes tener menos de 0 items")
            console.log('limite negativo alcanzado')
        }        
    }
   
  return (    
    <div>
        <p>Items {Count}</p>
        <button onClick={increment}> + </button>
        <button onClick={decrement}> - </button>
        {/* <button onClick={() => setCount(Count + 1)}> + </button>
        <button onClick={() => setCount(Count - 1)}> - </button> */}
    </div>
  );
};

export default ItemCount;