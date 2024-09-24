import { i18n, TOptions } from 'i18next';

type TranslationObject = {
  [key: string]: string | TranslationObject;
};

declare module 'react-i18next' {
  interface TranslationKeys extends TranslationObject {}

  interface CustomTypeOptions {
    resources: {
      en: TranslationKeys;
      ua: TranslationKeys;
    };
  }

  export const initReactI18next: {
    type: '3rdParty';
    init: (instance: i18n) => void;
  };

  export function useTranslation<K extends keyof CustomTypeOptions['resources']>(
    options?: TOptions,
  ): {
    t: (key: K | string, options?: TOptions) => string;
    i18n: i18n;
  };
}
