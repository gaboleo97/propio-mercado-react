
// import { useEffect, useState } from "react"
// import { getProducts, listProducts } from "../../data/asyncMock"
// import { ItemList } from "../ItemList/ItemList"

// export const ItemListContainer = () => {

//     const [items, setItems] = useState([])
//     const categoria = 'remeras'
//     useEffect(() => {
//         getProducts(categoria)
//             .then(res => setItems(res))
//             .catch(err => console.log(err))
//     }, [])

//     return (
//         <>
//             {items.length > 0 ? <ItemList productos={items} />
//                 : <div>Cargando...</div>
//             }
//         </>
//     )
// }


import { useEffect, useState } from "react"
import { getProducts, listProducts, getProductos} from "../../data/asyncMock"
import { ItemList } from "../ItemList/ItemList"

export const ItemListContainer = () => {

    const [items, setItems] = useState([])
    // console.log(categoria);
    // const categoria = "remeras"
    useEffect(() => {
        getProductos()
            .then(res => setItems(res))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            {items.length > 0 ? <ItemList productos={items} />
                : <div>Cargando...</div>
            }
        </>
    )
}
