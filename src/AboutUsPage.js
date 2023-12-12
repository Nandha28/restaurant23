// AboutUsPage.js
import React from 'react';

const AboutUsPage = () => {
  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Welcome to Restoran</h2>
      <p style={descriptionStyle}>
        At Restoran, we are passionate about delivering a delightful dining experience that goes beyond just great food.
        Our journey began with a vision to create a welcoming space where people could come together, savor delicious
        dishes, and make lasting memories.
      </p>
      <p style={descriptionStyle}>
        Our chefs are dedicated to sourcing the finest ingredients, crafting each dish with care, and presenting a menu
        that celebrates flavors from around the world. Whether you're a food enthusiast or seeking a cozy place to
        connect with friends and family, Restoran is the perfect destination.
      </p>
      <p style={descriptionStyle}>
        Beyond our commitment to culinary excellence, we take pride in our warm hospitality, inviting ambiance, and a
        team that is passionate about making every visit special. Join us at Restoran and experience a culinary
        journey that transcends the ordinary.
      </p>
      <p style={signatureStyle}>Bon Appétit! The Restoran Team</p>
    </div>
  );
};

// Styles
const containerStyle = {
  maxWidth: '800px',
  margin: 'auto',
  padding: '20px',
  textAlign: 'center',
};

const headerStyle = {
  fontSize: '2em',
  marginBottom: '20px',
};

const descriptionStyle = {
  fontSize: '1.2em',
  lineHeight: '1.6',
  marginBottom: '20px',
};

const signatureStyle = {
  fontWeight: 'bold',
  fontStyle: 'italic',
};

export default AboutUsPage;
