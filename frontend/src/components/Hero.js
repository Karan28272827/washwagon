import React from 'react';

const Hero = () => {
  return (
    <section style={heroStyle}>
      <div style={contentStyle}>
        <h1 style={titleStyle}>Effortless Laundry, Delivered to Your Doorstep</h1>
        <p style={subtitleStyle}>
          Experience quick, reliable laundry pickup and delivery with just a few clicks. Clean clothes, hassle-free.
        </p>
        <button style={btnStyle}>Book a Service</button>
      </div>
    </section>
  );
};

const heroStyle = {
  background: 'linear-gradient(135deg, #6f86d6, #48c6ef)', // gradient blue background
  color: '#fff',
  padding: '100px 20px',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const contentStyle = {
  maxWidth: '800px',
};

const titleStyle = {
  fontSize: '3rem',
  fontWeight: '700',
  marginBottom: '20px',
};

const subtitleStyle = {
  fontSize: '1.25rem',
  marginBottom: '30px',
  lineHeight: '1.5',
};

const btnStyle = {
  backgroundColor: '#fff',
  color: '#0aaee4ff',
  border: 'none',
  padding: '15px 40px',
  fontSize: '1.1rem',
  borderRadius: '30px',
  cursor: 'pointer',
  fontWeight: '600',
};

export default Hero;
