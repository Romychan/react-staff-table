import { useLayoutEffect, useState } from 'react';

import { getInitialTheme } from '@utils/getInitialTheme';
import { DARK_THEME, LIGHT_THEME, THEME_STORAGE_NAME } from '@constants/theme';

import { ThemeType } from '@interfaces/index';

export const useThemeMode = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  const applyTheme = (newTheme: ThemeType) => {
    const root = window.document.documentElement;
    const isDark = newTheme === DARK_THEME;

    root.classList.remove(isDark ? LIGHT_THEME : DARK_THEME);
    root.classList.add(newTheme);

    localStorage.setItem(THEME_STORAGE_NAME, newTheme);
  };

  useLayoutEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return { theme, setTheme };
};
