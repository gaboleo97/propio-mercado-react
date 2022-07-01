
import { ItemCount } from "../itemCount/ItemCount"
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
                        <ItemCount stock={5} initial={1} name={name} id={id} description={description}/>
                        <hr />
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

