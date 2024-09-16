import styles from './CatalogPage.module.scss';

import { ProductsGrid } from './components/ProductsGrid/ProductsGrid';
import { CatalogContextProvider, useCatalogContext } from './context/CatalogContext';
import { HOST } from '../../utils/constants/host';
import { Breadcrumbs } from '../../components/Breadcrumbs';

type CatalogPageProps = {
  title: string;
};

const CatalogPage = ({ title }: CatalogPageProps) => {
  const { products } = useCatalogContext();

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
    <CatalogContextProvider source={`${HOST}/${source}`}>
      <CatalogPage title={title} />
    </CatalogContextProvider>
  );
};
