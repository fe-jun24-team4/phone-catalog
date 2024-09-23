import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useFetchData } from '../../hooks/useFetch';
import { HOST } from '../../utils/constants/host';
import { Product } from '../../types/Product';
import styles from './DetailsPage.module.scss';

import AboutSection from './components/AboutSection/AboutSection';
import { Photos } from './components/Photos';
import { TechSpecs } from './components/TechSpecs';
import { Variants } from './components/Variants';
import { Breadcrumbs } from '../../components/Breadcrumbs';

export const DetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname.split('/')[1];

  const { data } = useFetchData<Product>(`${HOST}/api/${path}.json`);

  const product = data.find(item => item.id === location.pathname.split('/')[2]) || null;

  return (
    <Breadcrumbs.Checkpoint title={product?.name ?? 'Unknown'}>
      <div className={styles.productDetails}>
        <div className={styles.productDetailsWrapper}>
          <div className={styles.productHeader}>
            <Breadcrumbs.View />

            <button className={styles.backButton} onClick={() => navigate(-1)}>
              <span className="icon-chevron-left" />
              Back
            </button>
          </div>
          <div className={styles.productMain}>
            <div className={styles.productFeatures}>
              <h2 className={styles.productTitle}>{product?.name}</h2>

              {product && <Photos product={product} />}

              {product && <Variants product={product} />}
            </div>

            <div className={styles.productInfo}>
              {product && <AboutSection description={product.description} />}

              {product && <TechSpecs product={product} />}
            </div>
          </div>
          <div className={styles.productRecommended} />
        </div>
      </div>
    </Breadcrumbs.Checkpoint>
  );
};
