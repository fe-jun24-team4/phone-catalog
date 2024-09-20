import React, { FC } from 'react';
import styles from './TechSpecs.module.scss';
import { getDescriptionContent } from './helpers/helpers';
import { Product } from '../../../../types/Product';

interface Props {
  product: Product;
}

export const TechSpecs: FC<Props> = ({ product }) => {
  const { screen, resolution, processor, ram, capacity, camera, zoom, cell } = product;
  const techSpecs = { screen, resolution, processor, ram, capacity, camera, zoom, cell };

  return (
    <div className={styles.container}>
      <span className={styles.title}>Tech Specs</span>
      <div className={styles.divider}></div>

      <div className={styles.containers}>
        {Object.entries(techSpecs).map(([key, value]) => {
          const capitalizedTitle = key.charAt(0).toUpperCase() + key.slice(1);
          const specsContent =
            capitalizedTitle === 'Capacity' ? 'Built in memory' : capitalizedTitle;
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
