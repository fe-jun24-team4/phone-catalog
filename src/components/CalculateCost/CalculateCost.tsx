import { FC, useState, useEffect } from 'react';
import styles from './CalculateCost.module.scss';
import React from 'react';
import classNames from 'classnames';

// interface Props {
//   title: string;
//   count: number;
//   cost: number;
// }

const test = [
  {
    title: 'name',
    count: 3,
    cost: 800,
  },
  {
    title: 'name',
    count: 1,
    cost: 800,
  },
];

export const TotalCost: FC = ({}) => {
  const [calculate, setCalculate] = useState(0);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    const totalCost = test.reduce((acc, item) => acc + item.cost * item.count, 0);

    setCalculate(totalCost);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.totalSummary}>
        <div className={styles.count}>
          <span className={styles.totalCost}>${calculate}</span>
        </div>
        <div className={styles.totalForItems}>Total for {test.length} items</div>
      </div>
      <div className={styles.divider}></div>
      <button
      className={classNames(styles.buttonPrimary, {
        [styles.buttonSelected]: isSelected,
      })}
      onClick={() => setIsSelected(true)}
    >
      Checkout{/* {title} */}
    </button>
    </div>
  );
};