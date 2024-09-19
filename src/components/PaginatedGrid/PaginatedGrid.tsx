import styles from './PaginateGrid.module.scss';

import React, { useState } from 'react';
import { Product } from '../../types/Product';
import { ProductCard } from '../ProductCard';
import { PaginationControls } from './PaginationControls';

type Props = {
  products: Product[];
  perPage: number;
};

export const PaginatedGrid = ({ products, perPage }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);

  const pageStart = (currentPage - 1) * perPage;
  const pageEnd = currentPage * perPage;
  const productsOnPage = products.slice(pageStart, pageEnd);
  const fitsOnOnePage = products.length <= perPage;

  return (
    <div className={styles.container}>
      <ol className={styles.grid}>
        {productsOnPage.map(product => (
          <li key={product.id} className={styles.gridItem}>
            <ProductCard product={product} />
          </li>
        ))}
      </ol>

      {!fitsOnOnePage && (
        <div className={styles.controlsContainer}>
          <PaginationControls
            itemsCount={products.length}
            perPage={perPage}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
};
