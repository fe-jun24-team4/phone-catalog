import React from 'react';
import styles from './HomePage.module.scss';
import { ShopByCategory } from '../../components/ShopByCategory/ShopByCategory';
import { ProductCard } from '../../components/ProductCard';

export const HomePage = () => {
  const product = {
    id: '',
    category: '',
    namespaceId: '',
    name: '',
    capacityAvailable: [],
    capacity: '',
    priceRegular: 0,
    priceDiscount: 0,
    colorsAvailable: [],
    color: '',
    images: [],
    description: [],
    screen: '',
    resolution: '',
    processor: '',
    ram: '',
    cell: [],
    zoom: '',
    camera: '',
  };

  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <div className={styles.homeHeader}>
          <h1>Welcome to Nice Gadgets Store!</h1>
        </div>
        <div className={styles.banner}>
          <img src="http://unsplash.it/1200/500" alt="" />
          <span className={styles.lines}>
            <span className={styles.firstLine}>―</span> ― ―
          </span>
        </div>
        <div>
          <div className={styles.productCardsContainer}>
            <h2>Brand New Models</h2>
            <ProductCard product={product} />
          </div>
        </div>
        <ShopByCategory />
        <div className={styles.productCardsContainer}>
          <h2>Hot Prices</h2>
          <ProductCard product={product} />
        </div>
      </div>
    </div>
  );
};
