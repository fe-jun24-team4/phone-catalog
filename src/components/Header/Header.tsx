import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import classnames from 'classnames';
import { RouteNames } from '../../enums/RouteNames';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to={RouteNames.home} className={styles.logo}>
          <img
            src="./src/images/nice-gadgets-logo.svg"
            className={styles.logoImage}
            alt="Nice Gadgets Logo"
          />
        </Link>

        <nav className={styles.menu}>
          <div className={styles.menuWrapper}>
            <ul className={styles.list}>
              <li className={styles.menuItem}>
                <Link to={RouteNames.home}>Home</Link>
              </li>

              <li className={styles.menuItem}>
                <Link to={RouteNames.phones}>Phones</Link>
              </li>

              <li className={styles.menuItem}>
                <Link to={RouteNames.tablets}>Tablets</Link>
              </li>

              <li className={styles.menuItem}>
                <Link to={RouteNames.accessories}>Accessories</Link>
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
          <Link to={RouteNames.favorites} className={styles.icon}>
            <span className="icon-heart"></span>
          </Link>
          <Link to={RouteNames.cart} className={styles.icon}>
            <span className="icon-shopping-bag"></span>
          </Link>
        </div>

        <div className={styles.burgerMenu}>
          <span className="icon-home"></span>
        </div>
      </div>
    </header>
  );
};
