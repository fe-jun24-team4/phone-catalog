import styles from './CatalogPage.module.scss';
import { BreadCrumbs } from '../../components/BreadCrumbs';
import { ProductsGrid } from './components/ProductsGrid/ProductsGrid';

import cn from 'classnames';

import data from '../../api/products.json';

const phones = data.filter(item => item.category === 'phones');

export const CatalogPage = () => {
  useEffect(() => {});

  return (
    <div className={cn(styles.container)}>
      <BreadCrumbs />

      <div className={cn(styles.titleContainer)}>
        <h1 className={cn(styles.titleText)}>Mobile phones</h1>
        <p className={cn(styles.titleSubscript)}>{phones.length} models</p>
      </div>

      <ProductsGrid products={phones} />
    </div>
  );
};
