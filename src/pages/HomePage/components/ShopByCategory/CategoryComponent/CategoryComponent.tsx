import React, { FC } from 'react';
import styles from './CategoryComponent.module.scss';
import { Link } from 'react-router-dom';
import { RouteNames } from '../../../../../enums/RouteNames';

interface Props {
  imgSrc: string;
  title: string;
  productsAmount: number;
  linkRoute: RouteNames;
  className: string;
}

export const CategoryComponent: FC<Props> = ({
  imgSrc,
  title,
  productsAmount,
  linkRoute,
  className,
}) => {
  return (
    <Link to={linkRoute} className={styles.cart_box}>
      <div className={`${styles.picture} ${styles[className]}`}>
        <img className={styles[className]} src={imgSrc} alt={title} />
      </div>
      <div className={styles.titleAndCount}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.quantity}>{productsAmount || 0} models</p>
      </div>
    </Link>
  );
};
