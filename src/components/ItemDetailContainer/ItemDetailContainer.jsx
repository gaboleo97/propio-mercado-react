import { useEffect, useState } from "react"
import { getProductById } from "../../data/asyncMock"
import { ItemDetail } from "../ItemDetail/ItemDetail"

export const ItemDetailContainer = () => {

    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)

    const id = 2

    useEffect(() => {
        getProductById(id)
            .then(res => {
                setItem(res)
                setLoading(false)
            }
            )
            .catch(err => console.log(err))
    }, [])

    console.log("item:", item)

    return (
        <>
            <br />
            <br /><br /><br />
            <h1>ITEM DETAIL: </h1>
            <hr />
            {loading ? <div>Cargando...</div>
                : <ItemDetail img={item.img} name={item.name} description={item.description} />
            }
        </>
    )
}
