import React, { useEffect } from 'react';
import styles from './Header.module.scss';
import classnames from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import { RouteNames } from '../../enums/RouteNames';
import { isLinkActive } from './isLinkActive';
import { IconsComponent } from './iconsComponent/iconsComponent';
import { useHandleMenuAction } from './hooks/useHandleMenuAction';

export const Header: React.FC = () => {
  const { isMenuActive, setIsMenuActive, handleMenuAction } = useHandleMenuAction();

  const getLinkActiveClassName = (params: { isActive: boolean }) =>
    classnames(styles.link, isLinkActive(styles.active, params));

  useEffect(() => {
    if (isMenuActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuActive]);

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

        <nav
          className={classnames(styles.menu, {
            [styles.active]: isMenuActive,
          })}
        >
          <div className={styles.menuWrapper}>
            <ul className={styles.list}>
              <li className={styles.menuItem}>
                <NavLink
                  to={RouteNames.home}
                  className={getLinkActiveClassName}
                  onClick={handleMenuAction}
                >
                  Home
                </NavLink>
              </li>

              <li className={styles.menuItem}>
                <NavLink
                  to={RouteNames.phones}
                  className={getLinkActiveClassName}
                  onClick={handleMenuAction}
                >
                  Phones
                </NavLink>
              </li>

              <li className={styles.menuItem}>
                <NavLink
                  to={RouteNames.tablets}
                  className={getLinkActiveClassName}
                  onClick={handleMenuAction}
                >
                  Tablets
                </NavLink>
              </li>

              <li className={styles.menuItem}>
                <NavLink
                  to={RouteNames.accessories}
                  className={getLinkActiveClassName}
                  onClick={handleMenuAction}
                >
                  Accessories
                </NavLink>
              </li>
            </ul>

            <IconsComponent mobile />
          </div>
        </nav>

        <IconsComponent />

        <div
          className={classnames(styles.burgerMenu, {
            [styles.active]: isMenuActive,
          })}
          onClick={() => setIsMenuActive(prev => !prev)}
        >
          <div className={styles.burgerItem} />

          <div className={styles.burgerItem} />

          <div className={styles.burgerItem} />
        </div>
      </div>
    </header>
  );
};
