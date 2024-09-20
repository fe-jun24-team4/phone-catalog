import styles from './Variants.module.scss';
import cn from 'classnames';

import { Product } from '../../../../types/Product';
import React, { useState } from 'react';
import { ButtonFavorite, ButtonPrimary } from '../../../../components/buttons';
import { colorNameToRgb } from '../../../../utils/colorNameToRgb';
import { useFavouritesContext } from '../../../FavouritesPage/context/FavouritesContext';
import { useCartContext } from '../../../CartPage/context/CartContext';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../../../enums/RouteNames';

type Props = {
  product: Product;
  onColorChange?: (color: string) => void;
  onCapacityChange?: (capacity: string) => void;
};

export const Variants = ({
  product,
  onColorChange = () => {},
  onCapacityChange = () => {},
}: Props) => {
  const {
    id,
    priceDiscount: priceNow,
    priceRegular: priceBefore,
    capacityAvailable: capacityVariants,
    colorsAvailable: colorVariants,
    color: defaultColor,
    capacity: defaultCapacity,
  } = product;

  const specs = [
    ['Screen', product.screen],
    ['Resolution', product.resolution],
    ['Processor', product.processor],
    ['Ram', product.ram],
  ];

  const navigate = useNavigate();

  const { favourites, addFavourite, removeFavourite } = useFavouritesContext();
  const isInFavourite = Boolean(favourites.find(item => item.id === product.id));

  const { cart, addItem: addToCart } = useCartContext();
  const isInCart = Boolean(cart.find(item => item.product.id === product.id));

  const [color, setColor] = useState(defaultColor);
  const [capacity, setCapacity] = useState(defaultCapacity);

  const selectColor = (newColor: string) => {
    if (newColor !== color) {
      setColor(newColor);
      onColorChange(newColor);
    }
  };

  const selectCapacity = (newCapacity: string) => {
    if (newCapacity !== capacity) {
      setCapacity(newCapacity);
      onCapacityChange(newCapacity);
    }
  };

  const handleAddToCart = () => {
    if (isInCart) {
      navigate(RouteNames.cart);
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
    <section className={styles.container}>
      <article className={styles.variants}>
        <div className={styles.colorVariantsAndId}>
          <span className={styles.description}>Available colors</span>
          <span className={styles.id}>ID: {id}</span>
        </div>

        <div className={styles.variantButtonsContainer}>
          {colorVariants.map(variant => (
            <button
              key={variant}
              className={cn(styles.colorButton, { [styles.isSelected]: variant === color })}
              onClick={() => selectColor(variant)}
            >
              <div className={styles.color} style={{ backgroundColor: colorNameToRgb(variant) }} />
            </button>
          ))}
        </div>
      </article>

      <div className={styles.separator} />

      <article className={styles.variants}>
        <p className={styles.description}>Select capacity</p>

        <div className={styles.variantButtonsContainer}>
          {capacityVariants.map(variant => (
            <button
              key={variant}
              className={cn(styles.capacityButton, { [styles.isSelected]: variant === capacity })}
              onClick={() => selectCapacity(variant)}
            >
              {variant}
            </button>
          ))}
        </div>
      </article>

      <div className={styles.separator} />

      <div className={styles.addToCartAndSpecs}>
        <article className={styles.addToCart}>
          <div className={styles.priceBlock}>
            <span className={styles.priceNow}>{priceNow}</span>
            <span className={styles.priceBefore}>{priceBefore}</span>
          </div>

          <div className={styles.cartAndFavourite}>
            <ButtonPrimary
              title={isInCart ? 'View in cart' : 'Add to cart'}
              selected={isInCart}
              onClick={handleAddToCart}
            />
            <ButtonFavorite icon="icon-heart" selected={isInFavourite} onClick={toggleFavourite} />
          </div>
        </article>

        <article className={styles.specs}>
          {specs.map(([title, value]) => (
            <div key={title} className={styles.spec}>
              <span className={styles.description}>{title}</span>
              <span className={styles.specValue}>{value}</span>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
};
