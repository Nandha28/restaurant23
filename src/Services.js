import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';

const cardData = [
  {
    title: 'Restaurant Booking',
    description: 'Book a table at Annapoorna, a vegetarian restaurant in Coimbatore.',
    image: '/static/images/cards/contemplative-reptile.jpg',
    buttonText: 'BOOK NOW',
    link: '/book',
  },
  {
    title: 'Hotels',
    description: 'Explore our list of hotels for a comfortable stay.',
    image: '/static/images/cards/contemplative-reptile.jpg',
    buttonText: 'VIEW ',
    link: '/menu',
    
  },
  {
    title: '24*7 Customer Care',
    description: 'Contact our customer care for any assistance.',
    image: '/static/images/cards/contemplative-reptile.jpg',
    buttonText: 'CONTACT US',
    link: '/ContactUs',
   
  },
];

export default function Services() {
  return (
    <Grid container spacing={2} justifyContent="center" style={{ marginTop: '50px', marginLeft:'60px'}}>
      {cardData.map((card, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={card.image}
                alt={card.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            <Link to={card.link}><Button size="small" color="primary">
                {card.buttonText}
              </Button></Link>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
