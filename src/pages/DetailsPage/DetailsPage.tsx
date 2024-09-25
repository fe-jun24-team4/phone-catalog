import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useFetchData } from '../../hooks/useFetch';
import { HOST } from '../../utils/constants/host';
import { ProductDetails } from '../../types/Product';
import styles from './DetailsPage.module.scss';

import AboutSection from './components/AboutSection/AboutSection';
import { Photos } from './components/Photos';
import { TechSpecs } from './components/TechSpecs';
import { Variants } from './components/Variants';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { useTranslation } from 'react-i18next';
import { useFetchRecommended } from '../../hooks/useFetchRecommended';
import { Slider } from '../../components/slider/Slider';
import { Category } from '../../types/Category';

export const DetailsPage = () => {
  const { t } = useTranslation();

  const location = useLocation();
  const navigate = useNavigate();

  const [category, id] = location.pathname.split('/').slice(1);
  const { data } = useFetchData<ProductDetails>(`${HOST}/api/${category}.json`);
  const product = data.find(item => item.id === id) || null;

  const recommendedData = useFetchRecommended(category as Category, 6);

  const recommendedSlider = {
    sliders: recommendedData,
    settings: {
      slidesPerView: 'auto',
      spaceBetween: 16,
      delay: 2500,
    },
    sliderHeader: {
      title: t('sliderTitles.youMayAlsoLike'),
    },
    width: true,
  };

  const navigateToVariant = (capacity: string, color: string) => {
    const newId = `${product?.namespaceId}-${capacity}-${color}`;

    navigate(`../${newId}`);
  };

  return (
    <Breadcrumbs.Checkpoint title={product?.name ?? 'Unknown'}>
      <div className={styles.productDetails}>
        <div className={styles.productDetailsWrapper}>
          <div className={styles.productHeader}>
            <Breadcrumbs.View />

            <button className={styles.backButton} onClick={() => navigate(-1)}>
              <span className="icon-chevron-left" />
              {t('detailsPage.back')}
            </button>
          </div>
          <div className={styles.productMain}>
            <div className={styles.productFeatures}>
              <h2 className={styles.productTitle}>{product?.name}</h2>

              {product && <Photos key={product.images[0]} product={product} />}

              {product && <Variants product={product} onChange={navigateToVariant} />}
            </div>

            <div className={styles.productInfo}>
              {product && <AboutSection description={product.description} />}

              {product && <TechSpecs product={product} />}
            </div>
          </div>
          <Slider slider={recommendedSlider} />
        </div>
      </div>
    </Breadcrumbs.Checkpoint>
  );
};
