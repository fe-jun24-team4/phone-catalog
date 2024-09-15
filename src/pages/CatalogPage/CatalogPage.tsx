import { BreadCrumbs } from '../common/BreadCrumbs';
import { ProductsGrid } from './components/ProductsGrid/ProductsGrid';
import style from './CatalogPage.module.scss';

import cn from 'classnames';

export const CatalogPage = () => {
  return (
    <div className={cn(style.container)}>
      <BreadCrumbs />

      <div className={cn(style.titleContainer)}>
        <h1 className={cn(style.titleText)}>Mobile phones</h1>
        <p className={cn(style.titleSubscript)}>95 models</p>
      </div>

      <ProductsGrid />
    </div>
  );
};
