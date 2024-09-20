import styles from './ShopByCategory.module.scss';
import React from 'react';

export const ShopByCategory = () => {
  return (
    <div className="page">
      <h2>Shop by categories</h2>
      <div className={styles.categories}>
        <div className={styles.cart_box}>
          <div className={styles.picture}></div>
          <div className={styles.titleAndCount}>
            <h3 className={styles.title}>Mobile phones</h3>
            <p className={styles.quantity}>54 models</p>
          </div>
        </div>
        <div className={styles.cart_box}>
          <div className={styles.picture}></div>
          <div className={styles.titleAndCount}>
            <h3 className={styles.title}>Tablets</h3>
            <p className={styles.quantity}>54 models</p>
          </div>
        </div>
        <div className={styles.cart_box}>
          <div className={styles.picture}></div>
          <div className={styles.titleAndCount}>
            <h3 className={styles.title}>Accessories</h3>
            <p className={styles.quantity}>54 models</p>
          </div>
        </div>
      </div>
    </div>
  );
};
