import styles from './CheckoutModal.module.scss';

import React from 'react';
import { OrderItem } from '../../../../types/OrderItem';
import { ButtonPrimary } from '../../../../components/buttons';
import { Input } from '../../../../components/inputs';
import { shippingOptions } from '../../../../utils/constants/dropdownOptions';
import { CartItem } from '../../../../CartItem/CartItem';

import data from '../../../../api/phones.json';

function useCartContext(): { orderItems: OrderItem[] } {
  return {
    orderItems: data.slice(0, 3).map((product, index) => ({ product, amount: index + 1 })),
  };
}

export const CheckoutModal = () => {
  const { orderItems } = useCartContext();

  return (
    <div className={styles.container}>
      <div className={styles.order}>
        {orderItems.map(item => (
          <CartItem key={item.product.id} item={item} />
        ))}
      </div>

      <form className={styles.form}>
        <Input.Text placeholder="First name" />
        <Input.Text placeholder="Last name" />
        <Input.Text placeholder="my.email@domain.com" />
        <Input.Dropdown label="Ship to:" options={shippingOptions} />
        <Input.CreditCard label="Please, enter your credit card info:" />
      </form>

      <div className={styles.total}>
        <h3 className={styles.totalText}>Your total is ${1234}</h3>

        <div className={styles.separator} />

        <div className={styles.buttons}>
          <ButtonPrimary title="Confirm" />
          <ButtonPrimary title="Return to Cart" />
        </div>
      </div>
    </div>
  );
};
