import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useThemeContext } from '../../../context/ThemeContext';
import { themeDark, themeLight } from '../../../types/ColorTheme';
import classNames from 'classnames';

import styles from './themeLanguageToggles.module.scss';

interface Props {
  mobile?: boolean;
}

export const ThemeLanguageToggles: FC<Props> = ({mobile}) => {
  const { theme, setTheme } = useThemeContext();
  const { i18n } = useTranslation();

  const isUkrainian = i18n.language === 'ua';
  const isThemeLight = theme === themeLight.id;

  const toggleLanguage = () => {
    const newLang = isUkrainian ? 'en' : 'ua';

    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  return (
    <div className={classNames(styles.features, { [styles.mobile]: mobile })}>
      <div className={styles.languages} onClick={toggleLanguage}>
        <span
          className={classNames(styles.language, styles.en, {
            [styles.active]: !isUkrainian,
          })}
        >
          EN
        </span>
        <div className={styles.separator} />
        <span
          className={classNames(styles.language, styles.ua, {
            [styles.active]: isUkrainian,
          })}
        >
          UA
        </span>
      </div>
      <div
        className={classNames(styles.theme)}
        onClick={() => setTheme(isThemeLight ? themeDark.id : themeLight.id)}
      >
        <span className={`${isThemeLight ? 'icon-sun' : 'icon-moon-stars'}`} />
      </div>
    </div>
  );
};
