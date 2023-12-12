// HomePage.js
import React from 'react';

const HomePage = () => {
  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1 style={titleStyle}>Welcome to Restoran</h1>
        <p style={subtitleStyle}>Discover Culinary Excellence</p>
      </header>

      <section style={featureSectionStyle}>
        <div style={featureStyle}>
          <img src="https://assets.vogue.in/photos/61d84b5b9db8964401d2b0e4/4:3/w_4095,h_3071,c_limit/15%20best%20multi-cuisine%20restaurants%20in%20Mumbai,%20New%20Delhi,%20Bengaluru,%20Kolkata%20and%20Goa.jpg" alt="Delicious Dish" style={featureImageStyle} />
          <h2 style={featureTitleStyle}>Exquisite Dishes</h2>
          <p style={featureDescriptionStyle}>
            Indulge in a variety of exquisite dishes crafted by our talented chefs using the finest ingredients.
          </p>
        </div>

        <div style={featureStyle}>
          <img src="https://www.restobiz.ca/wp-content/uploads/2014/05/ambience-777x400.jpg" alt="Cozy Ambiance" style={featureImageStyle} />
          <h2 style={featureTitleStyle}>Cozy Ambiance</h2>
          <p style={featureDescriptionStyle}>
            Experience a warm and inviting ambiance, perfect for intimate dinners or gatherings with loved ones.
          </p>
        </div>

        <div style={featureStyle}>
          <img src="https://www.escoffier.edu/wp-content/uploads/2022/03/Chef-in-uniform-posing-for-a-photo-in-a-kitchen-1400.jpg" alt="Talented Chefs" style={featureImageStyle} />
          <h2 style={featureTitleStyle}>Talented Chefs</h2>
          <p style={featureDescriptionStyle}>
            Our team of skilled chefs is dedicated to creating culinary masterpieces that delight the senses.
          </p>
        </div>
      </section>
    </div>
  );
};

// Styles
const containerStyle = {
  maxWidth: '1200px',
  margin: 'auto',
  padding: '20px',
};

const headerStyle = {
  textAlign: 'center',
  marginBottom: '40px',
};

const titleStyle = {
  fontSize: '2.5em',
  margin: '0',
  color: '#333',
};

const subtitleStyle = {
  fontSize: '1.2em',
  color: '#666',
};

const featureSectionStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
};

const featureStyle = {
  flex: '1',
  marginBottom: '30px',
  textAlign: 'center',
};

const featureImageStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: '8px',
  marginBottom: '20px',
};

const featureTitleStyle = {
  fontSize: '1.8em',
  margin: '10px 0',
  color: '#333',
};

const featureDescriptionStyle = {
  fontSize: '1.2em',
  color: '#666',
};

export default HomePage;
