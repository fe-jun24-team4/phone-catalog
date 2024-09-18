import React from 'react';
import styles from './CartPageRoute.module.scss';
// import { DropdownButton } from '../DropdownButton';

export const PageRoute = () => {
  return (
    <div>
      <div className={styles.header_box}>
        <p className={styles.back}>
          <a className="icon-chevron-left"></a>
          Back
        </p>
        <div className={styles.title}>Cart</div>
      </div>

      <div className={styles.main_box}>
        <div className={styles.phoneContainer}></div>
        <div className={styles.phoneContainer}></div>
        <div className={styles.phoneContainer}></div>
      </div>

      {/* <div className="footer_box">
      
      </div> */}
    </div>
  );
};
