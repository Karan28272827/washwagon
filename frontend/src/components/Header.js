import React from 'react';

const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <h1 style={{ margin: 0 }}>Laundry Booking</h1>
        <nav>
          <a href="#features" style={linkStyle}>Features</a>
          <a href="#pricing" style={linkStyle}>Pricing</a>
          <a href="#contact" style={linkStyle}>Contact</a>
        </nav>
      </div>
    </header>
  );
};

const headerStyle = {
  backgroundColor: '#282c34',
  padding: '1rem 0',
  color: 'white',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  position: 'sticky',
  top: 0,
  zIndex: 100,
};

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 1rem',
};

const linkStyle = {
  color: 'white',
  marginLeft: '1.5rem',
  textDecoration: 'none',
  fontWeight: '500',
};

export default Header;
