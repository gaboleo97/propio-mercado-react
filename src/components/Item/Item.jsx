
// export const Item = ({ category, img, img2, name }) => {
//   return (
//       <>
//           <h1>{name}</h1>
//           <h3>{category}</h3>
//           <img src={img} alt={category} />
//           <img src={img2} alt={category} />
//           <br />
//           <button>Ver Mas</button>
//           <hr />

          
//       </>
//   )
// }
import './Item.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

export const Item = ({ producto}) => {
  
  return (
    <div className='container-item' >
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={producto.img}
          alt={producto.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {producto.name}
            <br/>
            {producto.category}
            <br/>
            {producto.id}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {producto.description}
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <Link to={`/description/${producto.id}`} >ver mas</Link> 
        </Button>
      </CardActions>
    </Card>
    </div>
  );
}


