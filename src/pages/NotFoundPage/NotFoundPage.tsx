import { Link } from 'react-router-dom';
import { RouteNames } from '../../enums/RouteNames';
import styles from './NotFoundPage.module.scss';
import React from 'react';

export const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>Page not found</p>
      <Link to={RouteNames.home} className={styles.link}>
        Return to the main page
      </Link>
    </div>
  );
};
