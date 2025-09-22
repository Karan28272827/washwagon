import React from 'react';
import styles from './Process.module.css';

const Process: React.FC = () => {
  return (
    <section className={styles.process}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Hassle-free Laundry with Our Simple Process</h2>
        
        <div className={styles.processGrid}>
          <div className={styles.processCard}>
            <h3 className={styles.cardTitle}>Your Laundry, Our Priority</h3>
            <p className={styles.cardDescription}>
              We handle your clothes with care and attention to detail, ensuring every garment receives premium treatment.
            </p>
            <a href="#book" className={styles.cardLink}>Book</a>
          </div>

          <div className={styles.processCard}>
            <h3 className={styles.cardTitle}>Schedule Pickup</h3>
            <p className={styles.cardDescription}>
              Choose your convenient time slot and we'll arrive at your doorstep to collect your laundry hassle-free.
            </p>
            <a href="#schedule" className={styles.cardLink}>Next</a>
          </div>

          <div className={styles.processCard}>
            <h3 className={styles.cardTitle}>Professional Cleaning by Experts</h3>
            <p className={styles.cardDescription}>
              Our trained professionals use advanced techniques and eco-friendly products for spotless results.
            </p>
            <a href="#experts" className={styles.cardLink}>Deliver</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;