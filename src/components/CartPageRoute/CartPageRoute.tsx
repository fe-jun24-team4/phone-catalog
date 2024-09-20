import React, { FC } from 'react';
import styles from './CartPageRoute.module.scss';
import { TotalCost } from '../CalculateCost';
import { CartItem } from '../../CartItem/CartItem';

const selectedPhone = [
  {
    imgSrc: 'https://as1.ftcdn.net/v2/jpg/09/22/20/04/1000_F_922200457_DRev8OFzTqURYJeaBAY4MUDonC41lX6i.jpg',
    description: 'image meat',
    quantity: 1,
    price: 200,
  },
  {
    imgSrc: 'https://as1.ftcdn.net/v2/jpg/09/22/20/04/1000_F_922200457_DRev8OFzTqURYJeaBAY4MUDonC41lX6i.jpg',
    description: 'image meat, image meat,image meatimage meatimage meatimage meatimage meatimage meatimage meatimage meatimage meat',
    quantity: 100000,
    price: 25000000,
  },
  {
    imgSrc: 'https://as1.ftcdn.net/v2/jpg/09/22/20/04/1000_F_922200457_DRev8OFzTqURYJeaBAY4MUDonC41lX6i.jpg',
    description: 'image meat',
    quantity: 1,
    price: 200,
  },
];

export const CartPageRoute: FC = () => {
  return (
    <div className={styles.cart}>
      <div className={styles.cartWrapper}>
        <div className={styles.header}>
          <a href="#" className={styles.back}>
            <span className="icon-chevron-left"></span>
            Back
          </a>
          <h2 className={styles.title}>Cart</h2>
        </div>

        <div className={styles.main}>
          <div className={styles.products_block}>
            {selectedPhone.map(phone => (
              <CartItem key={phone.description} selectedPhone={phone} />
            ))}
          </div>
          <TotalCost products={[]} />
        </div>
      </div>
    </div>
  );
};
