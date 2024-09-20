import { FC, useState, useEffect } from 'react';
import styles from './CalculateCost.module.scss';
import React from 'react';
import { ButtonPrimary } from '../buttons';
import { OrderItem } from '../../types/OrderItem';
import { calculateOrderTotal } from '../../features/calculateOrderTotal';
import { useCartContext } from '../../pages/CartPage/context/CartContext';
import { useNavigate } from 'react-router-dom';

type TotalCostProps = {
  order: OrderItem[];
};

export const TotalCost: FC<TotalCostProps> = ({ order }) => {
  const { cart } = useCartContext();
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const totalCost = calculateOrderTotal(order);

    setTotal(totalCost);
  }, [order]);

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty'); // потрібно?

      return;
    }

    navigate('/checkout');
  };

  return (
    <div className={styles.total}>
      <div className={styles.totalWrapper}>
        <div className={styles.totalBlock}>
          <p className={styles.price}>${total}</p>
          <p className={styles.text}>
            Total for {cart.length} {cart.length === 1 ? 'item' : 'items'}
          </p>
        </div>

        <div className={styles.line} />

        <ButtonPrimary title="Checkout" onClick={handleCheckout} />
      </div>
    </div>
  );
};
