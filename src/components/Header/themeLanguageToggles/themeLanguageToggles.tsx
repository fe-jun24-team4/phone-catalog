import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useThemeContext } from '../../../context/ThemeContext';
import { themeDark, themeLight } from '../../../types/ColorTheme';
import ukrFlag from './images/ukr_flag.png';
import engFlag from './images/english_flag.svg';
import classNames from 'classnames';

import styles from './themeLanguageToggles.module.scss';

export const ThemeLanguageToggles = () => {
  const { theme, setTheme } = useThemeContext();
  const { i18n } = useTranslation();

  const isUkrainian = i18n.language === 'ua';

  const toggleLanguage = () => {
    const newLang = isUkrainian ? 'en' : 'ua';

    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  return (
    <div className={styles.features}>
      <button className={styles.language} onClick={toggleLanguage}>
        {isUkrainian ? (
          <img
            src={ukrFlag}
            className={`${styles.flag} ${isUkrainian ? styles.visible : styles.hidden}`}
            alt="Ukrainian flag"
          />
        ) : (
          <img
            src={engFlag}
            className={`${styles.flag} ${isUkrainian ? styles.hidden : styles.visible}`}
            alt="English flag"
          />
        )}
      </button>
      <button
        className={classNames(styles.theme, { [styles.active]: theme === themeDark.id })}
        onClick={() => setTheme(theme === themeLight.id ? themeDark.id : themeLight.id)}
      >
        <span className={styles.themeItem} />
      </button>
    </div>
  );
};
