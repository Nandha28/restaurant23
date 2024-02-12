
import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p style={termsStyle}>Terms and Conditions Apply</p>
      <p style={copyrightStyle}>&copy; 2023 Restoran. All Rights Reserved.</p>
    </footer>
  );
};


const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '20px',
  textAlign: 'center',
  position: 'fixed',
  bottom: 0,
  width: '100%',
};

const termsStyle = {
  margin: '0',
  fontSize: '0.9em',
};

const copyrightStyle = {
  margin: '0',
  fontSize: '0.8em',
};

export default Footer;
