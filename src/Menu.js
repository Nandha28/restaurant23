import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Grid } from '@mui/material';

const hotelData = [
  {
    name: 'Annapoorna',
    description: 'Luxurious hotel with stunning views.',
    image: 'https://example.com/hotel-a-image.jpg',
    link: 'https://lh3.googleusercontent.com/bhUmhGHut8p79YR_RGUKL594u-2Ucr5sjrgKWP-QOoQi-O7-t32LaSEr-rYBjEteiZ5kYAGQlGdlztnLvP69d49Nbzrl=w1000-rw',
  },
  // Repeat the above structure for other hotels
  // ...
];

const Menu = () => {
  return (
    <Grid container spacing={2} justifyContent="center" style={{ marginTop: '50px', marginLeft: '60px' }}>
      {hotelData.map((hotel, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" height="140" image={hotel.image} alt={hotel.name} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {hotel.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {hotel.description}
              </Typography>
            </CardContent>
            <Box p={2} bgcolor="primary.main" color="white" textAlign="center" width="100%">
              <a href={hotel.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                View Menu
              </a>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Menu;
