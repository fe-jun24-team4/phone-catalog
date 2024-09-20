import { FC, useState, useEffect } from 'react';
import styles from './TotalCost.module.scss';
import React from 'react';
import { ButtonPrimary } from '../buttons';
import { OrderItem } from '../../types/OrderItem';
import { calculateOrderTotal } from '../../features/calculateOrderTotal';

type TotalCostProps = {
  order: OrderItem[];
};

export const TotalCost: FC<TotalCostProps> = ({ order }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalCost = calculateOrderTotal(order);

    setTotal(totalCost);
  }, []);

  return (
    <div className={styles.total}>
      <div className={styles.totalWrapper}>
        <div className={styles.totalBlock}>
          <p className={styles.price}>${total}</p>
          <p className={styles.text}>Total for {order.length} item</p>
        </div>

        <div className={styles.line} />

        <ButtonPrimary title="Checkout" />
      </div>
    </div>
  );
};
