import React, { useState } from 'react';
import styles from './ProductCard.module.scss';
import { Product } from '../../types/Product';
import { HOST } from '../../utils/constants/host';
import { ButtonFavorite, ButtonPrimary } from '../buttons';
import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../../pages/CartPage/context/CartContext';
import { useFavouritesContext } from '../../pages/FavouritesPage/context/FavouritesContext';
import { RouteNames } from '../../enums/RouteNames';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { images, name, priceRegular, priceDiscount, screen, capacity, ram } = product;
  const navigate = useNavigate();
  
  const { favourites, addFavourite, removeFavourite } = useFavouritesContext();
  const isInFavourite = Boolean(favourites.find(item => item.id === product.id));

  const { cart, addItem: addToCart } = useCartContext();
  const isInCart = Boolean(cart.find(item => item.product.id === product.id));

  const handleAddToCart = () => {
    if (isInCart) {
      navigate(`/cart`);
    } else {
      addToCart({ product, amount: 1 });
    }
  };

  const toggleFavourite = () => {
    if (isInFavourite) {
      removeFavourite(product);
    } else {
      addFavourite(product);
    }
  };

  return (
    <div className={styles.card}>
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
        <ButtonPrimary
              title={isInCart ? 'View in cart' : 'Add to cart'}
              selected={isInCart}
              onClick={handleAddToCart}
            />
        <ButtonFavorite icon="icon-heart" selected={isInFavourite} onClick={toggleFavourite} />
        </div>
      </div>
    </div>
  );
};
