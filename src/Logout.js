import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Logout = () => {
  const { logout } = useAuth0();

  const buttonStyle = {
    backgroundColor: "black",
    color: "white", 
    padding: "10px", 
    borderRadius: "5px", 
    cursor: "pointer", 
  };

  return (
    <button style={buttonStyle} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
  );
};

export default Logout;
