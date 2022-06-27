// category:"zapatillas",
// 		content:"",
// 		description:"ZAPATILLAS GRAND COURT. ZAPATILLAS MINIMALISTAS CON UN ESTILO CLÁSICO",		
//         img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c9598a1cf2924169888aa9810136e6d6_9366/Zapatillas_Grand_Court_Blanco_F36485_01_standard.jpg",		
//         img2:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f8daa3996318420490c6a9810136ff67_9366/Zapatillas_Grand_Court_Blanco_F36485_02_standard_hover.jpg",
// 		name:"mock - Zapatillas Grand Court",
// 		price:12499,
// 		stock:5
import ItemCount from "../itemCount/ItemCount"
import "./ItemDetail.css"

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export const ItemDetail = ({ img, name, description, id }) => {
    return (
        <div className="fondo">
            <Card sx={{ maxWidth: '100%' }}>
                <CardActionArea>
                    <CardMedia
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
                        <ItemCount stock={5} initial={1} />
                        <hr />
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

