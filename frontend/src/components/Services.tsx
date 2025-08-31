import React from 'react';
import styles from './Services.module.css';

const services = [
  {
    title: 'Casuals',
    description: 'Everyday wear that’s comfortable and easy to clean. We handle your t-shirts, jeans, and casual dresses with care.',
    image: '/images/casuals.png',
  },
  {
    title: 'Traditionals',
    description: 'Special care for traditional clothes like sarees, kurtas, and ethnic wear to keep your heritage vibrant.',
    image: '/images/traditionals.png',
  },
  {
    title: 'Formals',
    description: 'Professional attire like suits, shirts, and blazers receive expert cleaning and ironing for a sharp look.',
    image: '/images/formals.png',
  },
  {
    title: 'Hooded',
    description: 'Hooded jackets and sweaters cleaned gently to maintain softness and shape.',
    image: '/images/hooded.png',
  },
];


const Services: React.FC = () => {
  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.sectionTitle}>Our Services</h2>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <div className={styles.cardIcon}>
              <img src={service.image} alt={service.title} className={styles.serviceImage} />
            </div>
            <div className={styles.cardContent}>
              <img src={service.image} alt={service.title} className={styles.serviceImageSmall} />
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDesc}>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
