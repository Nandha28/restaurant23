// UserProfile.js
import React from 'react';

const UserProfile = () => {
  const userProfileStyle = {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    margin: 'auto',
    marginTop: '50px',
  };

  const profileImageStyle = {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    marginBottom: '20px',
  };

  const userInfoStyle = {
    marginBottom: '10px',
  };

  return (
    <div style={userProfileStyle}>
      <h2>User Profile</h2>
      <img src="https://static.wikia.nocookie.net/20thcenturyfox/images/a/a7/Robert.jpg/revision/latest?cb=20220117143156" alt="User Profile" style={profileImageStyle} />
      <div style={userInfoStyle}>
        <p><strong>User Name:</strong> ROBERT DOWENY JR</p>
        <p><strong>Email ID:</strong> robertdoweny@gmail.com</p>
        <p><strong>Phone Number:</strong> +91 9360211882</p>
        <p><strong>User Nickname:</strong> TONY STARK</p>
      </div>
    </div>
  );
};

export default UserProfile;
