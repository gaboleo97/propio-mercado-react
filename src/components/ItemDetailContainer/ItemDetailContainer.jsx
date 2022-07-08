import { useEffect, useState } from "react"
import { BsChevronDoubleLeft } from "react-icons/bs"
import { getProductById, getProducts, getProductos } from "../../data/asyncMock"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

export const ItemDetailContainer = () => {
    
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)
    let { id }  = useParams();
    // let id = parseInt('idP');
    // id = parseInt(id);
    // const [items, setItems] = useState([])
    // const id = 1
    // const categoria = 'remeras'
    // useEffect(() => {
    //     getProducts(categoria)
    //         .then(res => setItems(res))
    //         .catch(err => console.log(err))
    // }, [])
    // console.log('itemss',items)
    // let id = 6
    console.log(id)

    useEffect(() => {
        getProductById(id)
            .then(res => {
                setItem(res)
                setLoading(false)
            }
            )
            .catch(err => console.log(err))
    }, [id])

    console.log("item:", item)

    return (
        <>
            <h1>ITEM DETAIL: </h1>
            <hr/>
            {loading ? <div>Cargando...</div>
                : <ItemDetail producto={item}/>
            }
        </>
    )
}
