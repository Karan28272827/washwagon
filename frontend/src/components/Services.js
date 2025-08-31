import React from 'react';

const services = [
  {
    title: 'Casuals',
    description: 'Everyday wear that’s comfortable and easy to clean. We handle your t-shirts, jeans, and casual dresses with care.',
  },
  {
    title: 'Traditionals',
    description: 'Special care for traditional clothes like sarees, kurtas, and ethnic wear to keep your heritage vibrant.',
  },
  {
    title: 'Formals',
    description: 'Professional attire like suits, shirts, and blazers receive expert cleaning and ironing for a sharp look.',
  },
  {
    title: 'Hood-ed',
    description: 'Hooded jackets and sweaters cleaned gently to maintain softness and shape.',
  },
];

const Services = () => {
  return (
    <section style={servicesSectionStyle}>
      <h2 style={sectionTitleStyle}>Our Services</h2>
      <div style={servicesGridStyle}>
        {services.map((service, index) => (
          <div key={index} style={serviceCardStyle}>
            <h3 style={serviceTitleStyle}>{service.title}</h3>
            <p style={serviceDescStyle}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const servicesSectionStyle = {
  padding: '60px 20px',
  maxWidth: '1200px',
  margin: '0 auto',
};

const sectionTitleStyle = {
  textAlign: 'center',
  fontSize: '2rem',
  marginBottom: '40px',
  fontWeight: '700',
  color: '#333',
};

const servicesGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '30px',
};

const serviceCardStyle = {
  backgroundColor: '#f9f9f9',
  borderRadius: '12px',
  padding: '30px 20px',
  boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
  textAlign: 'center',
};

const serviceTitleStyle = {
  fontSize: '1.5rem',
  marginBottom: '15px',
  color: '#444',
};

const serviceDescStyle = {
  fontSize: '1rem',
  color: '#666',
  lineHeight: '1.5',
};

export default Services;
