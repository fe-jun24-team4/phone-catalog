import React from 'react';
import styles from './CatalogPage.module.scss';

import { ProductsGrid } from './components/ProductsGrid/ProductsGrid';
import { CatalogContextProvider, useCatalogContext } from './context/CatalogContext';
import { Breadcrumbs } from '../../components/Breadcrumbs';

type CatalogPageProps = {
  title: string;
};

const CatalogPage = ({ title }: CatalogPageProps) => {
  const { products } = useCatalogContext();
  
  console.log(products);

  return (
    <div className={styles.container}>
      <Breadcrumbs.View />

      <div className={styles.titleContainer}>
        <h1 className={styles.titleText}>{title}</h1>
        <p className={styles.titleSubscript}>{products.length} models</p>
      </div>

      <ProductsGrid products={products} />
    </div>
  );
};

type CatalogPageWithContextProps = {
  title: string;
  source: string;
};

export const CatalogPageWithContext = ({ title, source }: CatalogPageWithContextProps) => {
  return (
    <CatalogContextProvider source={source}>
      <CatalogPage title={title} />
    </CatalogContextProvider>
  );
};
