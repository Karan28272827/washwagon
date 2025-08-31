import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.leftText}>Sahab Lundry</h1>
        <div className={styles.rightText}>
          <p className={styles.subtitle}>
            Experience quick, reliable laundry pickup and delivery with just a few clicks. Clean clothes, hassle-free.
          </p>
          <div className={styles.btnGroup}>
            <button className={styles.btn}>Order Now</button>
            <button className={styles.btn}>Explore More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
