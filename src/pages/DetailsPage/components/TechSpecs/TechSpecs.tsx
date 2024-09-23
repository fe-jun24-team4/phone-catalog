import React, { FC } from 'react';
import styles from './TechSpecs.module.scss';
import { getDescriptionContent } from './helpers/helpers';
import { Product } from '../../../../types/Product';
import { useTranslation } from 'react-i18next';

interface Props {
  product: Product;
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
          const specsContent =
            key === 'capacity'
              ? t('detailsPage.memory')
              : t(`detailsPage.${key}`, key);

          const descriptionContent = getDescriptionContent(value);

          return (
            <div key={key} className={styles.specs_box}>
              <div className={styles.specs}>{specsContent}</div>
              <div className={styles.description}>{descriptionContent}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
