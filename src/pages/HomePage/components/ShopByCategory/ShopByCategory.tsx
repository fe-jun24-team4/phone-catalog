import styles from './ShopByCategory.module.scss';

import { CategoryComponent } from './CategoryComponent/CategoryComponent';
import React from 'react';
import { HOST } from '../../../../utils/constants/host';
import { useFetchData } from '../../../../hooks/useFetch';
import { Product } from '../../../../types/Product';
import { RouteNames } from '../../../../enums/RouteNames';

export const ShopByCategory = () => {
  const { data: phones } = useFetchData<Product>(`${HOST}/api/phones.json`);
  const { data: tablets } = useFetchData<Product>(`${HOST}/api/tablets.json`);
  const { data: accessories } = useFetchData<Product>(`${HOST}/api/accessories.json`);

  const categories = [
    {
      imgSrc: './img/category-phones.webp',
      title: 'Mobile phones',
      productsAmount: phones.length,
      linkRoute: RouteNames.phones,
    },
    {
      imgSrc: './img/category-tablets.webp',
      title: 'Tablets',
      productsAmount: tablets.length,
      linkRoute: RouteNames.tablets,
    },
    {
      imgSrc: './img/category-accessories.png',
      title: 'Accessories',
      productsAmount: accessories.length,
      linkRoute: RouteNames.accessories,
    },
  ];

  return (
    <div className="page">
      <h2>Shop by categories</h2>
      <div className={styles.categories}>
        {categories.map((category, index) => (
          <CategoryComponent
            key={index}
            imgSrc={category.imgSrc}
            title={category.title}
            productsAmount={category.productsAmount}
            linkRoute={category.linkRoute}
          />
        ))}
      </div>
    </div>
  );
};
