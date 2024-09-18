import style from './ProductsGridPage.module.scss';

import cn from 'classnames';

import React from 'react';
import { ProductShort as Product } from '../../../../types/Product';
import { ProductCard } from '../../../../components/ProductCard';

type Props = {
  products: Product[];
};

export const ProductsGridPage = ({ products }: Props) => {
  return (
    <ol className={cn(style.grid)}>
      {products.map(product => (
        <li key={product.id} className={style.gridItem}>
          <ProductCard product={product} />
        </li>
      ))}
    </ol>
  );
};
