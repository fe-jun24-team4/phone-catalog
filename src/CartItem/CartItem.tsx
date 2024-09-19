import React from 'react';
import styles from './CartItem.module.scss';
import { ButtonRounded } from '../components/buttons';
import classNames from 'classnames';
import { OrderItem } from '../types/OrderItem';

type CartItemProps = {
  item: OrderItem;
};

export const CartItem = ({ item }: CartItemProps) => {
  const { product, amount } = item;
  const { images, name, priceDiscount } = product;
  const image = images[0];

  return (
    <div className={styles.cart}>
      <div className={styles.container}>
        <div className={styles.position}>
          <span className="icon-plus" />
          <div className={styles.photo}>
            <img src={image} alt={name} className={styles.photoImg} />
          </div>
          <div className={styles.details}>
            <p className={styles.description}>{name}</p>
          </div>
        </div>

        <div className={classNames(styles.position, styles.spaceBetween)}>
          <div className={styles.quantityBlock}>
            <ButtonRounded icon="icon-minus" />
            <p className={styles.quantity}>{amount}</p>
            <ButtonRounded icon="icon-plus" />
          </div>
          <p className={styles.price}>${priceDiscount}</p>
        </div>
      </div>
    </div>
  );
};
