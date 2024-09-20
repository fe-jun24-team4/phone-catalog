import styles from './Photos.module.scss';
import cn from 'classnames';

import React from 'react';
import { useState } from 'react';
import { Product } from '../../../../types/Product';
import { HOST } from '../../../../utils/constants/host';

type Props = {
  product: Product;
};

export const Photos = ({ product }: Props) => {
  const { images, name } = product;

  const [hero, setHero] = useState(images[0]);

  return (
    <article className={styles.container}>
      <div className={styles.hero}>
        <img className={styles.heroImage} src={`${HOST}/${hero}`} alt={name} />
      </div>

      <div className={styles.aside}>
        {images.map(image => (
          <button
            key={image}
            className={cn(styles.asideItem, { [styles.isHero]: image === hero })}
            onClick={() => setHero(image)}
          >
            <img src={`${HOST}/${image}`} alt={image} />
          </button>
        ))}
      </div>
    </article>
  );
};
