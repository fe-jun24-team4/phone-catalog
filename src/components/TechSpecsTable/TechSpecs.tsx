import React from 'react';
import styles from './TechSpecs.module.scss';

export const TechSpecs = () => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Tech Specs</span>
      <div className={styles.divider}></div>

      <div className={styles.containers}>
        <div className={styles.specs_container}>
          <div className={styles.specs}>Screen</div>
          <div className={styles.description}>6.5” OLED</div>
        </div>
        <div className={styles.specs_container}>
          <div className={styles.specs}>Resolution</div>
          <div className={styles.description}>2688x1242</div>
        </div>
        <div className={styles.specs_container}>
          <div className={styles.specs}>Processor</div>
          <div className={styles.description}>Apple A12 Bionic</div>
        </div>
        <div className={styles.specs_container}>
          <div className={styles.specs}>RAM</div>
          <div className={styles.description}>3 GB</div>
        </div>
        <div className={styles.specs_container}>
          <div className={styles.specs}>Built in memory</div>
          <div className={styles.description}>64 GB</div>
        </div>
        <div className={styles.specs_container}>
          <div className={styles.specs}>Camera</div>
          <div className={styles.description}>12 Mp + 12 Mp + 12 Mp (Triple)</div>
        </div>
        <div className={styles.specs_container}>
          <div className={styles.specs}>Zoom</div>
          <div className={styles.description}>Optical, 2x</div>
        </div>
        <div className={styles.specs_container}>
          <div className={styles.specs}>Cell</div>
          <div className={styles.description}>GSM, LTE, UMTS</div>
        </div>
      </div>
    </div>
  );
};
