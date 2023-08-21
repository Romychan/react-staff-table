import { ThemeType } from '@interfaces/index';

import { DARK_THEME, LIGHT_THEME, THEME_STORAGE_NAME } from '@constants/theme';

export const getInitialTheme = (): ThemeType => {
  const storageTheme = localStorage.getItem(THEME_STORAGE_NAME) as ThemeType;

  if (storageTheme) {
    return storageTheme;
  }

  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return DARK_THEME;
  }

  return LIGHT_THEME;
};
