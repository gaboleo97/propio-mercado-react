import "./ItemListContainer.css";

const ItemListContainer = ({item1,item2,item3,item4}) => {
  return (    
    <div>   
      <ul className="">
        <li className="header__li"><a className="header__a" href="#">{item1}</a></li>
        <li className="header__li"><a className="header__a" href="#">{item2}</a></li>
        <li className="header__li"><a className="header__a" href="#">{item3}</a></li>
        <li className="header__li"><a className="header__a" href="#">{item3}</a></li>
      </ul>
    </div>
  );
};

export default ItemListContainer;