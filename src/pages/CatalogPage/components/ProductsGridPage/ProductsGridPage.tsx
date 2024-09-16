import style from './ProductsGridPage.module.scss';

import cn from 'classnames';

import { Product } from '../../../../types/Product';
import { ProductCard } from '../../../common/ProductCard/ProductCard';

type Props = {
  products: Product[];
};

export const ProductsGridPage = ({ products }: Props) => {
  return (
    <ol className={cn(style.grid)}>
      {products.map(product => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ol>
  );
};
