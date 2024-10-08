export type ColorTheme = {
  id: string;

  eyeCatchingPrimary: string; // themePurpleRed
  eyeCatchingSecondary: string; // themePurpleGreen

  background: string; // themePurpleWhite
  backgroundOnHover: string; // themePurpleBgHover

  elements: string; // themePurpleElements
  icons: string; // themePurpleIcons

  primary: string; // themePurplePrimary
  secondary: string; // themePurpleSecondary

  accentPrimary: string; // themePurpleAccent
  accentSecondary: string; // themePurpleSecondaryAccent
};

export const themeLight = Object.freeze<ColorTheme>({
  id: 'theme-purple-light',

  eyeCatchingPrimary: '#eb5757',
  eyeCatchingSecondary: '#27ae60',

  background: '#ffffff',
  backgroundOnHover: '#fafbfc',

  elements: '#e2e6e9',
  icons: '#b4bdc3',

  primary: '#0f0f11',
  secondary: '#89939a',

  accentPrimary: '#4219d0',
  accentSecondary: '#f4ba47',
});

export const themeDark = Object.freeze<ColorTheme>({
  id: 'theme-purple-dark',

  eyeCatchingPrimary: '#eb5757',
  eyeCatchingSecondary: '#27ae60',

  background: '#323542',
  backgroundOnHover: '#0f1121',

  elements: '#6b6f80',
  icons: '#4a4d58',

  primary: '#f1f2f9',
  secondary: '#75767f',

  accentPrimary: '#e8e9ee',
  accentSecondary: '#27c49a',
});

export const themes = [themeLight, themeDark];
