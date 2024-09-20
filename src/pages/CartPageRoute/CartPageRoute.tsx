import React, { FC } from 'react';
import styles from './CartPageRoute.module.scss';
import { TotalCost } from '../../components/TotalCost';
import data from '../../api/phones.json';
import { CartItem } from '../../CartItem/CartItem';
import { useNavigate } from 'react-router-dom';

const selectedProducts = data.slice(0, 3).map(phone => ({ product: phone, amount: 1 }));

export const CartPageRoute: FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.cart}>
      <div className={styles.cartWrapper}>
        <div className={styles.header}>
          <button className={styles.back} onClick={() => navigate(-1)}>
            <span className="icon-chevron-left"></span>
            Back
          </button>
          <h2 className={styles.title}>Cart</h2>
        </div>

        <div className={styles.main}>
          <div className={styles.products_block}>
            {selectedProducts.map(product => {
              return <CartItem key={product.product.id} selectedProduct={product} />;
            })}
          </div>
          <TotalCost order={selectedProducts} />
        </div>
      </div>
    </div>
  );
};
