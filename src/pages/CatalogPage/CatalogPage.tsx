import styles from './CatalogPage.module.scss';

import React from 'react';
import { Catalog } from './components/Catalog';
import { useCatalogContext } from './context/CatalogContext';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { TitleWithSubscript } from '../../components/text/TitleWithSubscript';

type CatalogPageProps = {
  title: string;
};

export const CatalogPage = ({ title }: CatalogPageProps) => {
  const { products } = useCatalogContext();

  return (
    <div className={styles.container}>
      <Breadcrumbs.View />

      <TitleWithSubscript title={title} subscript={`${products.length} models`} />

      <Catalog products={products} />
    </div>
  );
};
