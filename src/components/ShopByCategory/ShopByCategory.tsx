import { useFetchData } from '../../hooks/useFetch';
import { Product } from '../../types/Product';
import styles from './ShopByCategory.module.scss';
import React from 'react';

export const ShopByCategory = () => {
  const { data: phones } = useFetchData<Product>(
    'http://localhost:5173/phone-catalog/api/phones.json',
  );
  const { data: tablets } = useFetchData<Product>(
    'http://localhost:5173/phone-catalog/api/tablets.json',
  );
  const { data: accessories } = useFetchData<Product>(
    'http://localhost:5173/phone-catalog/api/accessories.json',
  );

  return (
    <div className="page">
      <h2>Shop by categories</h2>
      <div className={styles.categories}>
        <a href="url" className={styles.cart_box}>
          <div className={styles.picture}>
            <img
              className={styles.phone}
              src="http://localhost:5173/phone-catalog/img/category-phones.webp"
              alt="phone"
            />
          </div>
          <div className={styles.titleAndCount}>
            <h3 className={styles.title}>Mobile phones</h3>
            <p className={styles.quantity}>{phones.length || 0} models</p>
          </div>
        </a>
        <a href="url" className={styles.cart_box}>
          <div className={styles.picture}>
            <img
              className={styles.tablet}
              src="http://localhost:5173/phone-catalog/img/category-tablets.png"
              alt="phone"
            />
          </div>
          <div className={styles.titleAndCount}>
            <h3 className={styles.title}>Tablets</h3>
            <p className={styles.quantity}>{tablets.length || 0} models</p>
          </div>
        </a>
        <a href="url" className={styles.cart_box}>
          <div className={styles.picture}>
            <img
              className={styles.accessories}
              src="http://localhost:5173/phone-catalog/img/category-accessories.png"
              alt="phone"
            />
          </div>
          <div className={styles.titleAndCount}>
            <h3 className={styles.title}>Accessories</h3>
            <p className={styles.quantity}>{accessories.length || 0} models</p>
          </div>
        </a>
      </div>
    </div>
  );
};
