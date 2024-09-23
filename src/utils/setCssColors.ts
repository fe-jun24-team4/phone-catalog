import { themeLight, themes } from '../types/ColorTheme';

const root = document.querySelector(':root') as HTMLElement;

export function setCssColors(newThemeId: string) {
  const theme = themes.find(item => item.id === newThemeId) ?? themeLight;

  root.style.setProperty('--colorEyeCatchingPrimary', theme.eyeCatchingPrimary);
  root.style.setProperty('--colorEyeCatchingSecondary', theme.eyeCatchingSecondary);

  root.style.setProperty('--colorBackground', theme.background);
  root.style.setProperty('--colorBackgroundOnHover', theme.backgroundOnHover);

  root.style.setProperty('--colorElements', theme.elements);
  root.style.setProperty('--colorIcons', theme.icons);

  root.style.setProperty('--colorPrimary', theme.primary);
  root.style.setProperty('--colorSecondary', theme.secondary);

  root.style.setProperty('--colorAccentPrimary', theme.accentPrimary);
  root.style.setProperty('--colorAccentSecondary', theme.accentSecondary);
}
