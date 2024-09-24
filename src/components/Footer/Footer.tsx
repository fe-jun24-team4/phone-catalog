import React from 'react';
import styles from './Footer.module.scss';
//import logo from './Logo.svg';
import { ButtonRounded } from '../buttons';
import { Direction } from '../../enums/Direction';
import { Link } from 'react-router-dom';
import { RouteNames } from '../../enums/RouteNames';
import { Logo } from '../Logo';
import { useTranslation } from 'react-i18next';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
  });
};

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Link to={RouteNames.home} className={styles.logo}>
          {/* <img src={logo} className={styles.logoImage} alt="Nice Gadgets Logo" /> */}
          <Logo />
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li className={styles.navItem}>
              <a
                href="https://github.com/fe-jun24-team4/phone-catalog/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                {t('footer.github')}
              </a>
            </li>
            <li className={styles.navItem}>
              <a
                href="https://github.com/fe-jun24-team4/phone-catalog/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                {t('footer.contacts')}
              </a>
            </li>
            <li className={styles.navItem}>
              <a
                href="https://github.com/fe-jun24-team4/phone-catalog/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                {t('footer.rights')}
              </a>
            </li>
          </ul>
        </nav>

        <div className={styles.sectionBack}>
          <p className={styles.backText}>{t('footer.backToTop')}</p>

          <ButtonRounded rotate={Direction.up} onClick={scrollToTop} />
        </div>
      </div>
    </footer>
  );
};
