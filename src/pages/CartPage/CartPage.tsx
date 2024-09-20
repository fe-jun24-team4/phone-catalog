import styles from './CartPage.module.scss';

import React, { FC } from 'react';
import { TotalCost } from './components/TotalCost';

import { useCartContext } from '../../pages/CartPage/context/CartContext';
import { CartItem } from './components/CartItem/CartItem';
import { CheckoutModal } from './components/CheckoutModal/CheckoutModal';

export const CartPage: FC = () => {
  const { cart } = useCartContext();

  return (
    <>
      <CheckoutModal />

      <div className={styles.cart}>
        <div className={styles.cartWrapper}>
          <div className={styles.header}>
            <a href="#" className={styles.back}>
              <span className="icon-chevron-left" />
              Back
            </a>
            <h2 className={styles.title}>Cart</h2>
          </div>

          <div className={styles.main}>
            <div className={styles.productsBlock}>
              {cart.map(item => (
                <CartItem key={item.product.id} item={item} />
              ))}
            </div>
            <TotalCost order={cart} />
          </div>
        </div>
      </div>
    </>
  );
};
