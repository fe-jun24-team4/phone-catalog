import React from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageToggle = () => {
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
    </div>
  );
};
