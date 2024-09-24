import styles from './CartItem.module.scss';
import classNames from 'classnames';

import React from 'react';
import { OrderItem } from '../../../../types/OrderItem';
import { useCartContext } from '../../context/CartContext';
import { ButtonRounded } from '../../../../components/buttons';
import { Link } from 'react-router-dom';

type CartItemProps = {
  item: OrderItem;
};

export const CartItem = ({ item }: CartItemProps) => {
  const { product, amount } = item;

  const { image, name, price } = product;

  const { removeItem, updateQuantity } = useCartContext();

  const handleRemove = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    event.preventDefault();
    event.stopPropagation();

    removeItem(product.itemId);
  };

  const handleQuantityChange = (newAmount: number) => {
    if (newAmount > 0) {
      updateQuantity(product.itemId, newAmount);
    }
  };

  return (
    <Link to={`/${product.category}/${product.itemId}`} className={styles.card}>
      <div className={styles.cart}>
        <div className={styles.container}>
          <div className={styles.position}>
            <span className="icon-plus" onClick={handleRemove} />
            <div className={styles.photo}>
              <img src={image} alt={name} className={styles.photoImg} />
            </div>
            <div className={styles.details}>
              <p className={styles.description}>{name}</p>
            </div>
          </div>

          <div className={classNames(styles.position, styles.spaceBetween)}>
            <div className={styles.quantityBlock}>
              <ButtonRounded
                icon="icon-minus"
                disabled={amount === 1}
                onClick={event => {
                  event.preventDefault();
                  event.stopPropagation();

                  handleQuantityChange(amount - 1);
                }}
              />
              <p className={styles.quantity}>{amount}</p>
              <ButtonRounded
                icon="icon-plus"
                disabled={amount >= 9}
                onClick={event => {
                  event.stopPropagation();
                  event.preventDefault();

                  handleQuantityChange(amount + 1);
                }}
              />
            </div>
            <p className={styles.price}>${price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
