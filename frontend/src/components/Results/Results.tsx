import React from 'react';
import styles from './Results.module.css';

const Results: React.FC = () => {
  return (
    <section className={styles.results}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.leftContent}>
            <h2 className={styles.mainTitle}>
              Transforming Laundry into a Seamless Experience
            </h2>
            <p className={styles.description}>
              Join thousands of satisfied customers who trust Sahab Lundry for their laundry 
              needs. Experience the convenience of our reliable pickup and delivery service, 
              designed to save you time and effort.
            </p>
            
            <div className={styles.statsContainer}>
              <div className={styles.statItem}>
                <h3 className={styles.statNumber}>95%</h3>
                <p className={styles.statDescription}>
                  Customer satisfaction rate based on feedback.
                </p>
              </div>
              
              <div className={styles.statItem}>
                <h3 className={styles.statNumber}>100,000+</h3>
                <p className={styles.statDescription}>
                  Successful deliveries made since our launch.
                </p>
              </div>
            </div>
            
            <div className={styles.buttonGroup}>
              <a href="#learn-more" className={styles.primaryButton}>
                Learn More
              </a>
              <a href="#services" className={styles.secondaryButton}>
                See Services →
              </a>
            </div>
          </div>
          
          <div className={styles.rightContent}>
            <div className={styles.videoPlaceholder}>
              <div className={styles.playButton}>
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <circle cx="30" cy="30" r="30" fill="rgba(255, 255, 255, 0.9)" />
                  <path d="M25 20L40 30L25 40V20Z" fill="#0f0f0f" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;