import React, { useEffect } from 'react';
import styles from './Header.module.scss';
import classnames from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import { RouteNames } from '../../enums/RouteNames';
import { isLinkActive } from './isLinkActive';
import { IconsComponent } from './iconsComponent/iconsComponent';
import { useHandleMenuAction } from './hooks/useHandleMenuAction';
import logo from './Logo.svg';
import { LanguageToggle } from './languageButton/LanguageButton';
import { useTranslation } from 'react-i18next';

export const Header: React.FC = () => {
  const { isMenuActive, setIsMenuActive, handleMenuAction } = useHandleMenuAction();
  const { t } = useTranslation();

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
          <img src={logo} className={styles.logoImage} alt="Nice Gadgets Logo" />
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
                  {t('header.home')}
                </NavLink>
              </li>

              <li className={styles.menuItem}>
                <NavLink
                  to={RouteNames.phones}
                  className={getLinkActiveClassName}
                  onClick={handleMenuAction}
                >
                  {t('header.phones')}
                </NavLink>
              </li>

              <li className={styles.menuItem}>
                <NavLink
                  to={RouteNames.tablets}
                  className={getLinkActiveClassName}
                  onClick={handleMenuAction}
                >
                  {t('header.tablets')}
                </NavLink>
              </li>

              <li className={styles.menuItem}>
                <NavLink
                  to={RouteNames.accessories}
                  className={getLinkActiveClassName}
                  onClick={handleMenuAction}
                >
                  {t('header.accessories')}
                </NavLink>
              </li>
            </ul>

            <IconsComponent mobile />
          </div>
        </nav>
        <LanguageToggle />
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
