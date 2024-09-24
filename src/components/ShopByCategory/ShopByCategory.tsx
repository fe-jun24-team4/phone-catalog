import { RouteNames } from '../../enums/RouteNames';
import { useFetchData } from '../../hooks/useFetch';
import { Product } from '../../types/Product';
import { CategoryComponent } from './CategoryComponent/CategoryComponent';
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

  const categories = [
    {
      id: 1,
      imgSrc: './img/category-phones.webp',
      title: 'Mobile phones',
      productsAmount: phones.length,
      linkRoute: RouteNames.phones,
      className: 'phone',
    },
    {
      id: 1,
      imgSrc: './img/category-tablets.webp',
      title: 'Tablets',
      productsAmount: tablets.length,
      linkRoute: RouteNames.tablets,
      className: 'tablet',
    },
    {
      id: 1,
      imgSrc: './img/accessories/apple-watch-series-6/space-gray/00.webp',
      title: 'Accessories',
      productsAmount: accessories.length,
      linkRoute: RouteNames.accessories,
      className: 'accessories',
    },
  ];

  return (
    <div className={styles.categories}>
      <h2 className={styles.title}>Shop by categories</h2>
      <div className={styles.categoriesBlock}>
        {categories.map(category => (
          <CategoryComponent
            key={category.id}
            imgSrc={category.imgSrc}
            title={category.title}
            productsAmount={category.productsAmount}
            linkRoute={category.linkRoute}
            className={category.className}
          />
        ))}
      </div>
    </div>
  );
};
