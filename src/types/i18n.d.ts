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
}
