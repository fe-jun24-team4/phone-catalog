import styles from './Variants.module.scss';
import cn from 'classnames';

import { ProductDetails } from '../../../../types/Product';
import React, { useState } from 'react';
import { ButtonFavorite, ButtonPrimary } from '../../../../components/buttons';
import { colorNameToRgb } from '../../../../utils/colorNameToRgb';
import { useFavouritesContext } from '../../../FavouritesPage/context/FavouritesContext';
import { useCartContext } from '../../../CartPage/context/CartContext';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../../../enums/RouteNames';
import { useTranslation } from 'react-i18next';

type Props = {
  product: ProductDetails;
  onChange?: (capacity: string, color: string) => void;
};

export const Variants = ({ product, onChange = () => {} }: Props) => {
  const { t } = useTranslation();

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
    [`${t('detailsPage.screen')}`, product.screen],
    [`${t('detailsPage.resolution')}`, product.resolution],
    [`${t('detailsPage.processor')}`, product.processor],
    [`${t('detailsPage.ram')}`, product.ram],
  ];

  const navigate = useNavigate();

  const { favourites, addFavourite, removeFavourite } = useFavouritesContext();
  const isInFavourite = Boolean(favourites.find(item => item.itemId === product.id));

  const { cart, addItem: addToCart } = useCartContext();
  const isInCart = Boolean(cart.find(item => item.product.itemId === product.id));

  const [color, setColor] = useState(defaultColor);
  const [capacity, setCapacity] = useState(defaultCapacity);

  const selectColor = (newColor: string) => {
    if (newColor !== color) {
      setColor(newColor);
      onChange(capacity.toLowerCase(), newColor.toLowerCase().replace(/\s+/, '-'));
    }
  };

  const selectCapacity = (newCapacity: string) => {
    if (newCapacity !== capacity) {
      setCapacity(newCapacity);
      onChange(newCapacity.toLowerCase(), color.toLowerCase().replace(/\s+/, '-'));
    }
  };

  const handleAddToCart = () => {
    if (isInCart) {
      navigate(`/${RouteNames.cart}`);
    } else {
      addToCart({ productId: product.id, amount: 1 });
    }
  };

  const toggleFavourite = () => {
    if (isInFavourite) {
      removeFavourite(product.id);
    } else {
      addFavourite(product.id);
    }
  };

  return (
    <section className={styles.container}>
      <article className={styles.variants}>
        <div className={styles.colorVariantsAndId}>
          <span className={styles.description}>{t('detailsPage.availableColors')}</span>
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
        <p className={styles.description}>{t('detailsPage.selectCapacity')}</p>

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
              title={isInCart ? `${t('buttons.viewInCart')}` : `${t('buttons.addToCart')}`}
              selected={isInCart}
              onClick={handleAddToCart}
            />
            <ButtonFavorite selected={isInFavourite} onClick={toggleFavourite} />
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
