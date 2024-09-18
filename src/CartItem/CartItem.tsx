import React from 'react';
import styles from './CartItem.module.scss';
import { ButtonRounded } from '../components/buttons';
import classNames from 'classnames';

interface SelectedPhone {
    imgSrc: string,
    description: string,
    quantity: number,
    price: number,
}

interface Props {
    selectedPhone: SelectedPhone,
}

export const CartItem: React.FC<Props> = ({ selectedPhone }) => {
    const { imgSrc, description, quantity, price } = selectedPhone;
  return (
    <div className={styles.cart}>
      <div className={styles.container}>
        <div className={styles.position}>
        <span className='icon-plus'/>
        <div className={styles.photo}>
        <img src={imgSrc} alt={description} className={styles.photoImg} />
      </div>
      <div className={styles.details}>
        <p className={styles.description}>{description}</p>
        </div>
        </div>
      
      <div className={classNames(styles.position, styles.spaceBetween)}>
      <div className={styles.quantityBlock}>
          <ButtonRounded icon='icon-minus'/>
          <p className={styles.quantity}>{quantity}</p>
          <ButtonRounded icon='icon-plus' />
        </div>
          <p className={styles.price}>${price}</p>
        
      </div>  
      
    </div>
    </div>
    
  );
};

