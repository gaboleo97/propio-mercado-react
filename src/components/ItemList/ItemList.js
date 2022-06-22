import Item from "../Item/Item";
import './ItemList.css'

const ItemList = ({ productos }) => {

    //console.log("productos", productos)
  return (
    <>
        {
            //productos.map((product) => (<Item key={product.id} category={product.category} img={product.img} name={product.name}/>))
            productos.map((product) => (<Item key={product.id} {...product} />))
        }
    </>
  )
}

export default ItemList