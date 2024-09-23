import React from 'react';
import { useTranslation } from 'react-i18next';
import { useThemeContext } from '../../../context/ThemeContext';
import { themeDark, themeLight } from '../../../types/ColorTheme';

export const LanguageToggle = () => {
  const { theme, setTheme } = useThemeContext();
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ua' : 'en';

    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  return (
    <div>
      <button onClick={toggleLanguage}>
        {i18n.language === 'en' ? 'Switch to Ukrainian' : 'Переключити на англійську'}
      </button>
      <button onClick={() => setTheme(theme === themeLight.id ? themeDark.id : themeLight.id)}>
        Switch to {theme === themeLight.id ? 'dark' : 'light'}
      </button>
    </div>
  );
};
