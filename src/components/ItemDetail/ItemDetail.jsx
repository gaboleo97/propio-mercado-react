
import { ItemCount } from "../itemCount/ItemCount"
import "./ItemDetail.css"
import * as React from 'react';
import {useState, useEffect} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { click } from "@testing-library/user-event/dist/click";
import { convertLength } from "@mui/material/styles/cssUtils";
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";


export const ItemDetail = ({ producto }) => {
    const [cart, setCart, clear ,cantidad,addCart] = useContext(CartContext)
    // const initial = 1;
    // const [Count, setCount] = useState(initial);
    // const [Click,setClick] = useState(false)
    // const [Item, setItem] = useState([{}]);
    const [Detail, setDetail] = useState([]);
   // const [Detail, setDetail] = useState([]) 
   const onAdd = (Count) =>{
        addCart(producto,Count);
    
    }
   useEffect(() => {
   
  }, [])
   

    return (
        <div className="fondo contenedor">
            <div className="contenido">
            <Card sx={{ maxWidth: '100%' }}>
                <CardActionArea>
                    <CardMedia
                        className="imagen"
                        component="img"
                        image={producto.img}
                        alt={producto.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            <h1>{producto.name}</h1>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>{producto.description}</h3>
                        </Typography>
                        <br />
                       
                       
                        
                        <hr />
                    </CardContent>
                </CardActionArea>
            </Card>
            </div>
            
            <div className="contador">
            {/* { ? (<Button variant="contained" ><Link to="/Cart" className="btn-comprar" >Comprar</Link></Button>)
							: (<ItemCount stock={5} initial={initial} onAdd={onAdd}/>) } */}
                            <Button variant="contained" ><Link to="/Cart" className="btn-comprar" >Comprar</Link></Button>
                            <ItemCount stock={producto.stock} initial={1} onAdd={onAdd}/>
                        
                        
                        
            </div>
        </div>
    )
}




