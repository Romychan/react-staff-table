import { useThemeMode } from '@hooks/useThemeMode';

import { Toggle } from '@ui/Toggle/Toggle';

import styles from './ToggleTheme.module.scss';

export const ToggleTheme = () => {
  const { theme, setTheme } = useThemeMode();

  return (
    <div className={styles.container}>
      <p className={styles.text}>Light</p>
      <Toggle
        checked={theme === 'dark'}
        onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      />
      <p className={styles.text}>Dark</p>
    </div>
  );
};
