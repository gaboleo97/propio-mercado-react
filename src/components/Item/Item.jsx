
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

export const Item = ({ category, img, name ,description, id}) => {
  
  return (
    <div className='container-item' >
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={img}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
            <br/>
            {category}
            <br/>
            {id}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {description}
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <Link to={`/description/${id}`} >ver mas</Link> 
        </Button>
      </CardActions>
    </Card>
    </div>
  );
}


