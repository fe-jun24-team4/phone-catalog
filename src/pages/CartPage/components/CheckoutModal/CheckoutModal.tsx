import styles from './CheckoutModal.module.scss';

import React from 'react';
import { OrderItem } from '../../../../types/OrderItem';

import data from '../../../../api/products.json';
import { ButtonPrimary } from '../../../../components/buttons';
import { Input } from '../../../../components/inputs';
import { shippingOptions } from '../../../../utils/constants/dropdownOptions';

function useCartContext(): { orderItems: OrderItem[] } {
  return {
    orderItems: data.slice(0, 3).map((product, index) => ({ product, ammount: index + 1 })),
  };
}

type OrderItemCardPrors = {
  item: OrderItem;
};

export const OrderItemCard = ({ item }: OrderItemCardPrors) => {
  return <div style={{ width: '100%', height: '120px', backgroundColor: '#444444' }}></div>;
};

export const CheckoutModal = () => {
  const { orderItems } = useCartContext();

  return (
    <div className={styles.container}>
      <div className={styles.order}>
        {orderItems.map(item => (
          <OrderItemCard key={item.product.itemId} item={item} />
        ))}
      </div>

      <form className={styles.form}>
        <Input.Text placeholder="First name" />
        <Input.Text placeholder="Last name" />
        <Input.Text placeholder="my.email@domain.com" />
        <Input.Dropdown label="Ship to:" options={shippingOptions} />
        <Input.CreditCard label="Please, enter your credit card info:" />
      </form>

      <div className={styles.buttons}>
        <ButtonPrimary title="Confirm" />
        <ButtonPrimary title="Cancel" />
      </div>
    </div>
  );
};
