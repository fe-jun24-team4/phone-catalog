import React from 'react';
import styles from './HomePage.module.scss';
import { ShopByCategory } from './components/ShopByCategory';

export const HomePage = () => {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <div className={styles.homeHeader}>
          <h1>Welcome to Nice Gadgets Store!</h1>
        </div>
        {/* Needs to be replaced with real slider! */}
        <div className={styles.banner}>
          <img src="http://unsplash.it/1136/400" alt="Banner" />
          <span className={styles.lines}>
            <span className={styles.firstLine}>―</span> ― ―
          </span>
        </div>
        <div>
          {/* Needs to be replaced with real slider! */}
          <div className={styles.itemSlider}>
            <h2>Brand New Models</h2>
            <div className={styles.banner}>
              <picture>
                <source media="(min-width: 1024px)" srcSet="http://unsplash.it/1200/500" />
                <source media="(min-width: 768px)" srcSet="http://unsplash.it/800/500" />
                <img src="http://unsplash.it/320/320" alt="Banner" />
              </picture>
              <span className={styles.lines}>
                <span className={styles.firstLine}>―</span> ― ―
              </span>
            </div>
          </div>
        </div>
        <ShopByCategory />
        {/* Needs to be replaced with real slider! */}
        <div className={styles.itemSlider}>
          <h2>Hot Prices</h2>
          <div className={styles.banner}>
            <picture>
              <source media="(min-width: 1024px)" srcSet="http://unsplash.it/1200/500" />
              <source media="(min-width: 768px)" srcSet="http://unsplash.it/800/500" />
              <img src="http://unsplash.it/320/320" alt="Banner" />
            </picture>
            <span className={styles.lines}>
              <span className={styles.firstLine}>―</span> ― ―
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
