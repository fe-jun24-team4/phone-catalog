import styles from './CartItem.module.scss';
import classNames from 'classnames';

import React from 'react';
import { OrderItem } from '../../../../types/OrderItem';
import { useCartContext } from '../../context/CartContext';
import { ButtonRounded } from '../../../../components/buttons';

type CartItemProps = {
  item: OrderItem;
};

export const CartItem = ({ item }: CartItemProps) => {
  const { product, amount } = item;

  const { images, name, priceDiscount } = product;
  const image = images[0];

  const { removeItem, updateQuantity } = useCartContext();

  const handleRemove = () => {
    removeItem(product.id);
  };

  const handleQuantityChange = (newAmount: number) => {
    if (newAmount > 0) {
      updateQuantity(product.id, newAmount);
    }
  };

  return (
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
            <ButtonRounded icon="icon-minus" onClick={() => handleQuantityChange(amount - 1)} />
            <p className={styles.quantity}>{amount}</p>
            <ButtonRounded icon="icon-plus" onClick={() => handleQuantityChange(amount + 1)} />
          </div>
          <p className={styles.price}>${priceDiscount}</p>
        </div>
      </div>
    </div>
  );
};
