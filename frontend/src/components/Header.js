import React from 'react';

const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <div style={leftSectionStyle}>
          <div style={logoStyle}>Laundry</div>
          <nav style={navStyle}>
            <a href="#services" style={linkStyle}>Services</a>
            <a href="#pricing" style={linkStyle}>Pricing</a>
            <a href="#about" style={linkStyle}>About Us</a>
          </nav>
        </div>
        <nav style={rightNavStyle}>
          <a href="#login" style={linkStyle}>Log In</a>
          <a href="#contact" style={linkStyle}>Contact Us</a>
        </nav>
      </div>
    </header>
  );
};

const headerStyle = {
  backgroundColor: '#474c56ff',
  padding: '1rem 0',
  color: 'white',
  boxShadow: '0 2px 4px rgba(87, 82, 82, 0.1)',
  position: 'sticky',
  top: 0,
  zIndex: 100,
};

const containerStyle = {
  width: '100%',
  maxWidth: '1600px',
  margin: '0 1rem',
  padding: '0 1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const leftSectionStyle = {
  display: 'flex',
  alignItems: 'center',
};

const logoStyle = {
  fontWeight: '700',
  fontSize: '2rem',
  marginRight: '2rem',
};

const navStyle = {
  display: 'flex',
};

const rightNavStyle = {
  display: 'flex',
};

const linkStyle = {
  color: 'white',
  marginLeft: '1.5rem',
  textDecoration: 'none',
  fontWeight: '500',
};

export default Header;
