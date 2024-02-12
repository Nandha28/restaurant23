import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Logout from "./Logout";

const UserProfile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const imageStyle = {
    width: '150px', 
    height: '150px', 
    borderRadius: '50%', 
  };

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div style={containerStyle}>
        <img style={imageStyle} src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <Logout />
      </div>
    )
  );
};

export default UserProfile;
