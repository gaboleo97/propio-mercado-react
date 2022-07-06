
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



export const ItemDetail = ({ img, name, description, id }) => {
    const initial = 1;
    const [Count, setCount] = useState(initial);
    const [Click,setClick] = useState(false)
    console.log(Click)
   // const [Detail, setDetail] = useState([]) 
   const onAdd = (Count) =>{
    if (Count >= initial) {   

        setClick(true);
         console.log(`count: ${Count} click: ${Click}`) 
    }else{
        console.log(`error`)
    }
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
                        image={img}
                        alt={name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            <h1>{name}</h1>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>{description}</h3>
                        </Typography>
                        <br />
                       
                       
                        
                        <hr />
                    </CardContent>
                </CardActionArea>
            </Card>
            </div>
            
            <div className="contador">
            {Click ? (<Button variant="contained" ><Link to="/Cart" className="btn-comprar" >Comprar</Link></Button>)
							: (<ItemCount stock={5} initial={initial} onAdd={onAdd}/>) }
                        
                        
                        
            </div>
        </div>
    )
}




