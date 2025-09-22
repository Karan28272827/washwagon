import React, { useState, useEffect, useRef } from 'react';
import styles from './Reviews.module.css';

const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      text: "Exceptional service! My clothes come back perfectly clean and pressed. The pickup and delivery is always on time.",
      location: "Mumbai"
    },
    {
      id: 2,
      name: "Raj Patel",
      rating: 5,
      text: "I've been using Sahab Lundry for 6 months now. Professional, reliable, and great customer service. Highly recommend!",
      location: "Pune"
    },
    {
      id: 3,
      name: "Priya Sharma",
      rating: 5,
      text: "Amazing experience! They handle delicate fabrics with care and the convenience is unmatched. Will definitely continue using their service.",
      location: "Delhi"
    },
    {
      id: 4,
      name: "Amit Kumar",
      rating: 5,
      text: "Outstanding quality and service! They've made laundry so convenient. The team is professional and always delivers on time.",
      location: "Bangalore"
    },
    {
      id: 5,
      name: "Neha Gupta",
      rating: 5,
      text: "Best laundry service in the city! My clothes are always returned in perfect condition. Highly satisfied with their service.",
      location: "Chennai"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isVisible) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // 3 seconds between slides
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isVisible, reviews.length]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span 
        key={index} 
        className={`${styles.star} ${index < rating ? styles.filled : ''}`}
      >
        ★
      </span>
    ));
  };

  return (
    <section ref={sectionRef} className={styles.reviews}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>What Our Customers Say</h2>
        <p className={styles.sectionSubtitle}>
          Real experiences from satisfied customers who trust us with their laundry needs
        </p>
        
        <div className={styles.reviewsSlider}>
          {reviews.map((review, index) => (
            <div 
              key={review.id} 
              className={`${styles.reviewCard} ${
                index === currentIndex ? styles.active : styles.inactive
              }`}
              style={{
                display: index === currentIndex ? 'flex' : 'none'
              }}
            >
              <div className={styles.rating}>
                {renderStars(review.rating)}
              </div>
              <p className={styles.reviewText}>"{review.text}"</p>
              <div className={styles.reviewAuthor}>
                <h4 className={styles.authorName}>{review.name}</h4>
                <span className={styles.authorLocation}>{review.location}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.indicators}>
          {reviews.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${
                index === currentIndex ? styles.activeIndicator : ''
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;