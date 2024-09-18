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
    <div className={styles.total}>
      <div className={styles.totalWrapper}>
        <div className={styles.totalBlock}>
          <p className={styles.price}>${calculate}</p>
          <p className={styles.text}>Total for {products.length} item</p>
        </div>
        <div className={styles.line} />

        <ButtonPrimary title="Checkout" />
      </div>
    </div>
  );
};
