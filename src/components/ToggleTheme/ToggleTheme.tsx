import { useContext } from 'react';

import { DARK_THEME, LIGHT_THEME } from '@constants/theme';

import { ThemeContext } from '../../contexts/ThemeContext';
import { Toggle } from '@ui/Toggle/Toggle';

import styles from './ToggleTheme.module.scss';

export const ToggleTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={styles.container}>
      <p className={styles.text}>Light</p>
      <Toggle
        checked={theme === DARK_THEME}
        onChange={() =>
          setTheme(theme === DARK_THEME ? LIGHT_THEME : DARK_THEME)
        }
      />
      <p className={styles.text}>Dark</p>
    </div>
  );
};
