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
    image: 'https://img.freepik.com/premium-photo/table-reserved-customers_274689-40582.jpg',
    buttonText: 'BOOK NOW',
    link: '/book',
  },
  {
    title: 'Hotels',
    description: 'Explore our list of hotels for a comfortable stay.',
    image: 'https://wallpaperbat.com/img/729584-restaurants-wallpaper-top-free-restaurants-background.jpg',
    buttonText: 'VIEW ',
    link: '/menu',
    
  },
  {
    title: '24*7 Customer Care',
    description: 'Contact our customer care for any assistance.',
    image: 'https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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
                height="200"
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
