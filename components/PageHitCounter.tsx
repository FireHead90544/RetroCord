"use client"
import React, { useState, useEffect } from 'react';
import styles from '@/components/css/PageHitCounter.module.css';

export default function PageHitCounter() {
  const [hitCount, setHitCount] = useState<number>(0);

  useEffect(() => {
    const storedHitCount = localStorage.getItem('pageHitCount');

    if (storedHitCount) {
      const newHitCount = parseInt(storedHitCount, 10) + 1;
      setHitCount(newHitCount);
      localStorage.setItem('pageHitCount', newHitCount.toString());
    } else { // Fake some initial hits
      const initialHitCount = Math.floor(Math.random() * 101) + 100;
      setHitCount(initialHitCount);
      localStorage.setItem('pageHitCount', initialHitCount.toString());
    }
  }, []);

  return (
    <div className={styles.counterContainer}>
      <span className={styles.counterText}>
        Page Hits:
        <span className={styles.counterNumber}>
          {hitCount.toLocaleString()}
        </span>
      </span>
    </div>
  );
}