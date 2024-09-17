import { FC, useState, useEffect } from 'react';
import styles from './CalculateCost.module.scss';
import React from 'react';
import { ButtonPrimary } from '../buttons';

interface Product {
  title: string;
  count: number;
  cost: number;
}

type TotalCostProps = {
  products: Product[];
};

export const TotalCost: FC<TotalCostProps> = ({ products }) => {
  const [calculate, setCalculate] = useState(0);

  useEffect(() => {
    const totalCost = products.reduce((acc, item) => acc + item.cost * item.count, 0);

    setCalculate(totalCost);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.totalSummary}>
        <div className={styles.count}>
          <span className={styles.totalCost}>${calculate}</span>
        </div>
        <div className={styles.totalForItems}>Total for {products.length} items</div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.buttonContainer}>
        <ButtonPrimary title={'Checkout'} />
      </div>
    </div>
  );
};
