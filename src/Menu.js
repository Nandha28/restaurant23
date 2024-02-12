import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Grid } from '@mui/material';

const hotelData = [
  {
    name: 'Annapoorna',
    description: 'Luxurious hotel with stunning views.',
    image: 'data:image/png;base64,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',
    link: 'https://lh3.googleusercontent.com/bhUmhGHut8p79YR_RGUKL594u-2Ucr5sjrgKWP-QOoQi-O7-t32LaSEr-rYBjEteiZ5kYAGQlGdlztnLvP69d49Nbzrl=w1000-rw',
  },
  {
    name: 'A2B',
    description: 'Purely Veg.',
    image: 'https://lh3.googleusercontent.com/-s9CGbWSMPBYYHtzIatVGF56xyO_RcPkn5mwh6XNZhd0BZsljFCYebMGmVAYutMLVNfl7pokUOkhXCRq8zvbLXg4pjx7PgreJtcKQq3S=s750',
    link: 'https://image3.mouthshut.com/images/Restaurant/Menu/A2B-Adyar-Ananda-Bhavan-BTM-Layout-Bangalore-18036_125649.jpg',
  },
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
