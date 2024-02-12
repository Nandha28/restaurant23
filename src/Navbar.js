
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
      backgroundColor: 'orange',
      padding: '10px',
      display: 'flex',
      justifyContent: 'space-between', // Distribute space between logo and links
      alignItems: 'center', 
    };

    const logoStyle = {
      width: '50px', 
      height: 'auto', 
    };

    const ulStyle = {
      listStyleType: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
    };

    const liStyle = {
      marginLeft: '20px', 
    };

    const linkStyle = {
      textDecoration: 'none',
      color: 'white',
      fontWeight: 'bold',
      transition: 'color 0.3s ease', 
    };

    const activeLinkStyle = {
      color: 'white',
    };
    const containerStyle = {
      display: 'flex',
      alignItems: 'center',
    };

    const userProfileImageStyle = {
      width: '30px', 
      height: '30px', 
      borderRadius: '50%', 
      cursor: 'pointer', 
    };

    return (
      <nav style={navStyle}>
        <div style={containerStyle}> 
           
         
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
          <li style={liStyle}>
           
          </li>

          {/* User profile image */}
          <li style={liStyle}>
            <a href="/profile" style={linkStyle}>
              <img
                src={userProfileImageStyle.picture}
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
