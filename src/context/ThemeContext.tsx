import React, { createContext, PropsWithChildren, useContext, useEffect } from 'react';

import { useLocalStorage } from '../hooks/useLocalStorage';
import { ColorTheme, themeLight } from '../types/ColorTheme';
import { THEME } from '../utils/constants/localStorageKeys';
import { setCssColors } from '../utils/setCssColors';

type ColorThemeId = ColorTheme['id'];

type State = {
  theme: ColorThemeId;

  setTheme: (theme: ColorThemeId) => void;
};

const StateContext = createContext<State | null>(null);

export const ThemeContextProvider = ({ children }: PropsWithChildren) => {
  const { read, write } = useLocalStorage<ColorThemeId>(THEME, themeLight.id);

  const themeId = read();

  const state: State = {
    theme: themeId,
    setTheme: (newThemeId: ColorThemeId) => {
      write(newThemeId);
      setCssColors(newThemeId);
    },
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setCssColors(themeId), []);

  return <StateContext.Provider value={state}>{children}</StateContext.Provider>;
};

export const useThemeContext = () => {
  const state = useContext(StateContext);

  if (!state) {
    throw new Error('ThemeContext is not provided!');
  }

  return state;
};
