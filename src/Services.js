// HomePage.js
import React from 'react';


const Services = () => {
  // Sample list of hotels
  const hotels = [
    { id: 1, name: 'ANNAPOORNA', place: 'COIMBATORE', logo: "https://www.educatenepal.com/uploads/article/1511261041annapurnahotel-mlogo.gif", phoneNumber: '123-456-7890' },
    { id: 2, name: 'BURMA HOTEL', place: 'MADURAI', logo: 'https://b.zmtcdn.com/data/pictures/6/20415606/5bf9aefaadd37ca3c93ec1a5aab73193.jpg', phoneNumber: '987-654-3210' },
    // Add more hotels as needed
  ];

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Discover Our Hotels</h2>
      {hotels.map((hotel) => (
        <div key={hotel.id} style={hotelCardStyle}>
          <img src={hotel.logo} alt={`${hotel.name} Logo`} style={logoStyle} />
          <div style={textContainerStyle}>
            <h3 style={{ marginBottom: '10px' }}>{hotel.name}</h3>
            <p>Place: {hotel.place}</p>
            <p>Phone Number: {hotel.phoneNumber}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Styles
const hotelCardStyle = {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#fff',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  padding: '20px',
  marginBottom: '20px',
  transition: 'transform 0.3s ease',
  cursor: 'pointer',
  "&:hover": {
    transform: 'scale(1.05)',
  },
};

const logoStyle = {
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  marginRight: '20px',
};

const textContainerStyle = {
  flex: 1,
};

export default Services;