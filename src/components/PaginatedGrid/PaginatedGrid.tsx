import styles from './PaginateGrid.module.scss';

import React, { useState } from 'react';
import { Product } from '../../types/Product';
import { ProductCard } from '../ProductCard';
import { PaginationControls } from './PaginationControls';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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
        <TransitionGroup component={null}>
          {productsOnPage.map(product => (
            <CSSTransition
              key={product.id}
              timeout={500}
              classNames={{
                enter: styles.productEnter,
                enterActive: styles.productEnterActive,
                exit: styles.productExit,
                exitActive: styles.productExitActive,
              }}
            >
              <li className={styles.gridItem}>
                <ProductCard product={product} />
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
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
