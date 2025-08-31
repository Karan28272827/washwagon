import React, { useEffect, useState } from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('Hero'); // must set id="hero" for hero section!
    const onScroll = () => {
      if (!hero) return;
      const heroBottom = hero.getBoundingClientRect().bottom;
      // If header is overlapping hero, use merge color; else switch header color
      setScrolled(heroBottom <= 80); // 80 = header height
    };

    window.addEventListener('scroll', onScroll);
    onScroll(); // initial check

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : styles.headerHero}`}>
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