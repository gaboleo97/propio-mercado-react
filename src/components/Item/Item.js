
import './Item.css'

const Item = ({ category, img, img2, name }) => {
  return (
    <>
            <h1>{name}</h1>
            <h3>{category}</h3>
            <img src={img} alt={category} />
            <img src={img2} alt={category} />
            <br />
            <button>Ver Mas</button>
            <hr />
        </>
  )
}

export default Item