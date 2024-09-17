import React from 'react';
import styles from './Footer.module.scss';
import logo from './Logo.svg';
import { ButtonRounded } from '../buttons';
import { Direction } from '../../enums/Direction';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <a href="#" className={styles.logo}>
          <img src={logo} alt="Logo" className={styles.logoImg} />
        </a>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li className={styles.navItem}>
              <a
                href="https://github.com/your-repo"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                GITHUB
              </a>
            </li>
            <li className={styles.navItem}>
              <a
                href="https://github.com/your-repo"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                CONTACTS
              </a>
            </li>
            <li className={styles.navItem}>
              <a
                href="https://github.com/your-repo"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                RIGHTS
              </a>
            </li>
          </ul>
        </nav>

        <div className={styles.sectionBack}>
          <p className={styles.backText}>Back to top</p>

          <ButtonRounded rotate={Direction.up} onClick={scrollToTop} />
        </div>
      </div>
    </footer>
  );
};
