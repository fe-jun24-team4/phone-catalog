import React from 'react';
import styles from './HomePage.module.scss';
import { ShopByCategory } from './components/ShopByCategory';
import { Slider } from '../../components/slider/Slider';

export const HomePage = () => {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <div className={styles.homeHeader}>
          <h1>Welcome to Nice Gadgets Store!</h1>
        </div>
        <Slider
          slider={{
            sliders: [
              'src/pages/HomePage/img/banners/banner-1-large.png',
              'src/pages/HomePage/img/banners/banner-1-large.png',
              'src/pages/HomePage/img/banners/banner-1-large.png',
            ],
            settings: {
              slidesPerView: 1,
              spaceBetween: 0,
              delay: 5000,
              breakpoints: {
                640: {
                  slidesPerView: 1,
                },
                1200: {
                  slidesPerView: 1,
                },
              },
            },
          }}
        />
        <div className={styles.itemSlider}>
          <h2>Brand New Models</h2>
        </div>
        {/* <Slider  /> */}
        <ShopByCategory />

        <div className={styles.itemSlider}>
          <h2>Hot Prices</h2>
        </div>
        {/* <Slider  /> */}
      </div>
    </div>
  );
};
