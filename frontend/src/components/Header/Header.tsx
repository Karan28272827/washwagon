import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <div className={styles.logo}>Laundry</div>
          <nav className={styles.nav}>
            <a href="#services" className={styles.link}>Services</a>
            <a href="#pricing" className={styles.link}>Pricing</a>
            <a href="#about" className={styles.link}>About Us</a>
          </nav>
        </div>
        <nav className={styles.rightNav}>
          <a href="#login" className={styles.link}>Log In</a>
          <a href="#contact" className={styles.link}>Contact Us</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
