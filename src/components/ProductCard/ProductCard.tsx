import React from 'react';
import styles from './ProductCard.module.scss';
import { ProductShort as Product } from '../../types/Product';
import { HOST } from '../../utils/constants/host';
import { ButtonFavorite, ButtonPrimary } from '../buttons';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { image, name, price, fullPrice, screen, capacity, ram } = product;

  return (
    <a href="#" className={styles.card}>
      <div className={styles.wrapper}>
        <div className={styles.imageContent}>
          <img src={`${HOST}/${image}`} alt={name} className={styles.image} />
        </div>

        <div className={styles.content}>
          <div className={styles.info}>
            <h4 className={styles.title}>{name}</h4>

            <div className={styles.priceBlock}>
              <p className={styles.price}>${price}</p>
              {fullPrice && <span className={styles.fullPrice}>${fullPrice}</span>}
            </div>
          </div>

          <div className={styles.specs}>
            <div className={styles.specItem}>
              <p className={styles.specLabel}>Screen</p>

              <p className={styles.specValue}>{screen}</p>
            </div>

            <div className={styles.specItem}>
              <p className={styles.specLabel}>Capacity</p>

              <p className={styles.specValue}>{capacity}</p>
            </div>

            <div className={styles.specItem}>
              <p className={styles.specLabel}>RAM</p>

              <p className={styles.specValue}>{ram}</p>
            </div>
          </div>
        </div>

        <div className={styles.actions}>
          <ButtonPrimary title="Add to cart" />

          <ButtonFavorite icon={'icon-heart'} />
        </div>
      </div>
    </a>
  );
};
