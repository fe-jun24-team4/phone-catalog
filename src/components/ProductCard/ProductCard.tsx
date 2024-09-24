import React from 'react';
import styles from './ProductCard.module.scss';
import { Product } from '../../types/Product';
import { HOST } from '../../utils/constants/host';
import { ButtonFavorite, ButtonPrimary } from '../buttons';
import { Link, useNavigate } from 'react-router-dom';
import { useCartContext } from '../../pages/CartPage/context/CartContext';
import { useFavouritesContext } from '../../pages/FavouritesPage/context/FavouritesContext';
import { RouteNames } from '../../enums/RouteNames';
import { useTranslation } from 'react-i18next';

interface ProductCardProps {
  key?: number;
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { image, name, price, fullPrice, screen, capacity, ram } = product;

  const { t } = useTranslation();
  const navigate = useNavigate();

  const { favourites, addFavourite, removeFavourite } = useFavouritesContext();
  const isInFavourite = Boolean(favourites.find(item => item.id === product.id));

  const { cart, addItem: addToCart } = useCartContext();
  const isInCart = Boolean(cart.find(item => item.product.id === product.id));

  const handleAddToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    event.preventDefault();
    if (isInCart) {
      navigate(`/${RouteNames.cart}`);
    } else {
      addToCart({ productId: product.itemId, amount: 1 });
    }
  };

  const toggleFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    event.preventDefault();
    if (isInFavourite) {
      removeFavourite(product.itemId);
    } else {
      addFavourite(product.itemId);
    }
  };

  return (
    <Link to={`/${product.category}/${product.itemId}`} className={styles.card}>
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
              <p className={styles.specLabel}>{t('detailsPage.screen')}</p>

              <p className={styles.specValue}>{screen}</p>
            </div>

            <div className={styles.specItem}>
              <p className={styles.specLabel}>{t('detailsPage.capacity')}</p>

              <p className={styles.specValue}>{capacity}</p>
            </div>

            <div className={styles.specItem}>
              <p className={styles.specLabel}>{t('detailsPage.ram')}</p>

              <p className={styles.specValue}>{ram}</p>
            </div>
          </div>
        </div>

        <div className={styles.actions}>
          <ButtonPrimary
            title={isInCart ? 'View in cart' : 'Add to cart'}
            selected={isInCart}
            onClick={handleAddToCart}
          />
          <ButtonFavorite selected={isInFavourite} onClick={toggleFavourite} />
        </div>
      </div>
    </Link>
  );
};
