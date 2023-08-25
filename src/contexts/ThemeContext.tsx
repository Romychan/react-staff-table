import { PropsWithChildren, createContext } from 'react';

import { LIGHT_THEME } from '@constants/theme';

import { ThemeType } from '@interfaces/Theme';

import { useThemeMode } from '@hooks/useThemeMode';

interface IDefaultValue {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

const defaultValue: IDefaultValue = {
  theme: LIGHT_THEME,
  setTheme: () => {},
};

export const ThemeContext = createContext(defaultValue);

export const ThemeContextProvider = ({ children }: PropsWithChildren) => {
  const { theme, setTheme } = useThemeMode();

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
