import React from 'react';
import styles from './Header.module.scss';
import classnames from 'classnames';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a className={styles.logo}>
          <img
            src="./src/images/nice-gadgets-logo.svg"
            className={styles.logoImage}
            alt="Nice Gadgets Logo"
          />
        </a>

        <nav className={styles.menu}>
          <div className={styles.menuWrapper}>
            <ul className={styles.list}>
              <li className={styles.menuItem}>
                <a href="#">Home</a>
              </li>

              <li className={styles.menuItem}>
                <a href="#">Phones</a>
              </li>

              <li className={styles.menuItem}>
                <a href="#">Tablets</a>
              </li>

              <li className={styles.menuItem}>
                <a href="#">Accessories</a>
              </li>
            </ul>

            <div className={classnames(styles.icons, styles.mobile)}>
              <div className={styles.icon}>
                <span className="icon-heart"></span>
              </div>
              <div className={styles.icon}>
                <span className="icon-shopping-bag"></span>
              </div>
            </div>
          </div>
        </nav>

        <div className={styles.icons}>
          <div className={styles.icon}>
            <span className="icon-heart"></span>
          </div>
          <div className={styles.icon}>
            <span className="icon-shopping-bag"></span>
          </div>
        </div>

        <div className={styles.burgerMenu}>
          <span className="icon-home"></span>
        </div>
      </div>
    </header>
  );
};
