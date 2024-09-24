import styles from './TotalCost.module.scss';

import React from 'react';
import { FC, useState, useEffect } from 'react';
import { ButtonPrimary } from '../../../../components/buttons';
import { calculateOrderTotal } from '../../../../features/calculateOrderTotal';
import { OrderItem } from '../../../../types/OrderItem';
import { useCartContext } from '../../context/CartContext';
import { useTranslation } from 'react-i18next';

type TotalCostProps = {
  order: OrderItem[];
};

export const TotalCost: FC<TotalCostProps> = ({ order }) => {
  const { t } = useTranslation();
  const { cart, isCheckoutVisible, setIsCheckoutVisible } = useCartContext();
  const [total, setTotal] = useState(0);

  const itemsCount = cart.reduce((count, item) => count + item.amount, 0);

  useEffect(() => {
    const totalCost = calculateOrderTotal(order);

    setTotal(totalCost);
  }, [order]);

  const handleCheckout = () => {
    if (!isCheckoutVisible) {
      if (cart.length === 0) {
        alert(`${t('cart.empty')}`);
      } else {
        setIsCheckoutVisible(true);
      }
    }
  };

  return (
    <div className={styles.total}>
      <div className={styles.totalWrapper}>
        <div className={styles.totalBlock}>
          <p className={styles.price}>${total}</p>
          <p className={styles.text}>
            {t('cart.totalFor')} {itemsCount}{' '}
            {itemsCount === 1 ? `${t('cart.item')}` : `${t('cart.items')}`}
          </p>
        </div>

        <div className={styles.line} />

        <ButtonPrimary title="Checkout" onClick={handleCheckout} />
      </div>
    </div>
  );
};
