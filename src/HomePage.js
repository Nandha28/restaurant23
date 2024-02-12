import React from 'react';
import { styled } from '@mui/system';
import LoginButton from './LoginButton';


const HomePage = () => {
  return (
    <StyledContainer>
      <StyledDescription>
        <h1>Welcome to Restoran</h1>
        <p>Discover Culinary Excellence</p>
        <LoginButton />
      </StyledDescription>
    </StyledContainer>
  );
};

const StyledContainer = styled('div')({
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundImage: 'url("https://assets.vogue.in/photos/61d84b5b9db8964401d2b0e4/4:3/w_4095,h_3071,c_limit/15%20best%20multi-cuisine%20restaurants%20in%20Mumbai,%20New%20Delhi,%20Bengaluru,%20Kolkata%20and%20Goa.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: 'white',
  textAlign: 'center',
});

const StyledDescription = styled('div')({
  maxWidth: '600px',
  padding: '20px',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  borderRadius: '8px',
});



export default HomePage;
