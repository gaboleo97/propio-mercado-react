import { Item } from "../Item/Item"
import "./ItemList.css"

export const ItemList = ({ productos }) => {

    console.log("productos", productos)

    return (
        <>
            {
                // productos.map((unProducto) => (<Item key={unProducto.id} category={unProducto.category} img={unProducto.img} name={unProducto.name} />))
                productos.map((unProducto) => (<Item key={unProducto.id} {...unProducto} />))

            }
        </>
    )
}
