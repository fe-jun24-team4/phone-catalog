import React, { FC } from 'react';
import styles from './TechSpecs.module.scss';
import { getDescriptionContent } from './helpers/helpers';
import { ProductDetails } from '../../../../types/Product';
import { useTranslation } from 'react-i18next';

interface Props {
  product: ProductDetails;
}

export const TechSpecs: FC<Props> = ({ product }) => {
  const { screen, resolution, processor, ram, capacity, camera, zoom, cell } = product;
  const techSpecs = { screen, resolution, processor, ram, capacity, camera, zoom, cell };
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <span className={styles.title}>{t('detailsPage.titles.techSpecs')}</span>
      <div className={styles.divider}></div>

      <div className={styles.containers}>
        {Object.entries(techSpecs).map(([key, value]) => {
          const descriptionContent = getDescriptionContent(value);

          if (value === undefined) {
            return null;
          }

          return (
            <div key={key} className={styles.specs_box}>
              <div className={styles.specs}>{t(`detailsPage.${key}`)}</div>
              <div className={styles.description}>{descriptionContent}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
