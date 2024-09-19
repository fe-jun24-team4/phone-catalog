import React from 'react';
import styles from './ProductCard.module.scss';
import { Product } from '../../types/Product';
import { HOST } from '../../utils/constants/host';
import { ButtonFavorite, ButtonPrimary } from '../buttons';
import { useLocation, useNavigate } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { pathname } = useLocation();
  const { images, name, priceRegular, priceDiscount, screen, capacity, ram, id } = product;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${pathname}/${id}`);
  };

  return (
    <article className={styles.card} onClick={handleClick}>
      <div className={styles.wrapper}>
        <div className={styles.imageContent}>
          <img src={`${HOST}/${images[0]}`} alt={name} className={styles.image} />
        </div>

        <div className={styles.content}>
          <div className={styles.info}>
            <h4 className={styles.title}>{name}</h4>

            <div className={styles.priceBlock}>
              <p className={styles.price}>${priceDiscount}</p>
              {priceRegular && <span className={styles.fullPrice}>${priceRegular}</span>}
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
          <ButtonPrimary title="Add to cart" onClick={() => {
            console.log('add to cart');
          }} />

          <ButtonFavorite icon={'icon-heart'} />
        </div>
      </div>
    </article>
  );
};
