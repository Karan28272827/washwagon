import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Effortless Laundry, Delivered to Your Doorstep
        </h1>
        <p className={styles.subtitle}>
          Experience quick, reliable laundry pickup and delivery with just a few clicks. Clean clothes, hassle-free.
        </p>
        <button className={styles.btn}>Get Started</button>
      </div>
    </section>
  );
};

export default Hero;
