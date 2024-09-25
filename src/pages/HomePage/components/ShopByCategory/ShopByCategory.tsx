import styles from './ShopByCategory.module.scss';

import { CategoryComponent } from './CategoryComponent/CategoryComponent';
import React from 'react';
import { HOST } from '../../../../utils/constants/host';
import { useFetchData } from '../../../../hooks/useFetch';
import { Product } from '../../../../types/Product';
import { RouteNames } from '../../../../enums/RouteNames';
import { useTranslation } from 'react-i18next';

export const ShopByCategory = () => {
  const { t } = useTranslation();
  const { data: phones } = useFetchData<Product>(`${HOST}/api/phones.json`);
  const { data: tablets } = useFetchData<Product>(`${HOST}/api/tablets.json`);
  const { data: accessories } = useFetchData<Product>(`${HOST}/api/accessories.json`);

  const categories = [
    {
      imgSrc: './img/category-phones.webp',
      title: t('home.categories.categoryPhoneTitle'),
      productsAmount: phones.length,
      linkRoute: RouteNames.phones,
      className: 'phone',
    },
    {
      imgSrc: './img/category-tablets.webp',
      title: t('home.categories.categoryTabletTitle'),
      productsAmount: tablets.length,
      linkRoute: RouteNames.tablets,
      className: 'tablet',
    },
    {
      imgSrc: './img/accessories/apple-watch-series-6/space-gray/00.webp',
      title: t('home.categories.categoryAccessoryTitle'),
      productsAmount: accessories.length,
      linkRoute: RouteNames.accessories,
      className: 'accessories',
    },
  ];

  return (
    <div className={styles.categories}>
      <h2 className={styles.title}>{t('home.categories.title')}</h2>
      <div className={styles.categoriesBlock}>
        {categories.map((category, index) => (
          <CategoryComponent
            key={index}
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
