import { useEffect, useState } from "react";
import "./ItemListContainer.css";
//import ItemCount from '../itemCount/ItemCount';
import { getProducts, listProducts } from "../../data/asyncMock"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({item1,item2,item3,item4}) => {
  
  // const agregarAlCarrito= (cantidad) => {

  //   console.log(`se agrego: ${cantidad} al carrito`)
    
  //   }
//<ItemCount stock={10} initial={1} onAdd={agregarAlCarrito}/>
    const [items, setItems] = useState([])
    const categoria = "remeras"
    useEffect(() => {
        getProducts(categoria)
            .then(res => setItems(res))
            .catch(err => console.log(err))
    }, [])
    
  return (    
    <>   
        
      {items.length > 0 ? <ItemList product={items} /> : <div>Cargando...</div>
            }
  
    </>
  );
};

export default ItemListContainer;