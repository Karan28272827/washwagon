import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <p>© 2025 Laundry Booking. All rights reserved.</p>
        <div>
          <a href="mailto:support@laundrybooking.com" style={linkStyle}>Contact Support</a>
        </div>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#f1f1f1',
  padding: '1rem 0',
  marginTop: 'auto',
  fontSize: '0.9rem',
  color: '#555',
  borderTop: '1px solid #ddd',
};

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const linkStyle = {
  color: '#555',
  textDecoration: 'none',
  fontWeight: '500',
};

export default Footer;
