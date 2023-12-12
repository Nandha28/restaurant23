// Navbar.js
import React from 'react';


class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clickedLink: null,
    };
  }

  handleLinkClick = (link) => {
    this.setState({ clickedLink: link });
  };

  render() {
    const navStyle = {
      backgroundColor: 'ORANGE',
      padding: '10px',
      display: 'flex',
      justifyContent: 'space-between', // Distribute space between logo and links
      alignItems: 'center', // Center items vertically
    };

    const logoStyle = {
      width: '50px', // Adjust the width of your logo
      height: 'auto', // Maintain the aspect ratio
    };

    const ulStyle = {
      listStyleType: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
    };

    const liStyle = {
      marginLeft: '20px', // Adjust margin if needed
    };

    const linkStyle = {
      textDecoration: 'none',
      color: 'white',
      fontWeight: 'bold',
      transition: 'color 0.3s ease', // Transition for color change
    };

    const activeLinkStyle = {
      color: 'white', // Change to white for the active link
    };
    const containerStyle = {
      display: 'flex',
      alignItems: 'center',
    };

    const userProfileImageStyle = {
      width: '30px', // Adjust the width of your user profile image
      height: '30px', // Adjust the height of your user profile image
      borderRadius: '50%', // Make it circular
      cursor: 'pointer', // Change cursor to pointer on hover
    };

    return (
      <nav style={navStyle}>
        <div style={containerStyle}> 
           
          {/* Logo with a link to the home page */}
          <img src="https://www.sosfactory.com/wp-content/uploads/2016/12/mr-bolat-mascot-min.png" alt="Logo" style={logoStyle} />
          <a href="/" style={{ ...linkStyle, ...(this.state.clickedLink === 'RESTORAN' && activeLinkStyle) }}
              onClick={() => this.handleLinkClick('RESTORAN')}
            >  
            RESTORAN
            
          </a>  
        </div>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <a
              href="/"
              style={{ ...linkStyle, ...(this.state.clickedLink === 'Home' && activeLinkStyle) }}
              onClick={() => this.handleLinkClick('Home')}
            >
              HOME |
            </a>
          </li>
          <li style={liStyle}>
            <a
              href="/about"
              style={{ ...linkStyle, ...(this.state.clickedLink === 'About' && activeLinkStyle) }}
              onClick={() => this.handleLinkClick('About')}
            >
              ABOUT US |
            </a>
          </li>
          <li style={liStyle}>
            <a
              href="/services"
              style={{ ...linkStyle, ...(this.state.clickedLink === 'Services' && activeLinkStyle) }}
              onClick={() => this.handleLinkClick('Services')}
            >
              SERVICES |
            </a>
          </li>
          <li style={liStyle}>
            <a
              href="/book"
              style={{ ...linkStyle, ...(this.state.clickedLink === 'Book' && activeLinkStyle) }}
              onClick={() => this.handleLinkClick('Book')}
            >
              BOOK A TABLE |
            </a>
          </li>
          {/* User profile image */}
          <li style={liStyle}>
            <a href="/profile" style={linkStyle}>
              <img
                src="https://static.wikia.nocookie.net/20thcenturyfox/images/a/a7/Robert.jpg/revision/latest?cb=20220117143156" // Adjust the path to your user profile image
                alt="User Profile"
                style={userProfileImageStyle}
              />
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
