import { PropsWithChildren } from 'react';
import clsx from 'clsx';

import styles from './Badge.module.scss';

interface IBadgeProps {
  colorScheme?: 'default' | 'green' | 'red' | 'yellow';
}

export const Badge = ({
  colorScheme = 'default',
  children,
}: PropsWithChildren<IBadgeProps>) => {
  return (
    <span className={clsx(styles.badge, styles[colorScheme])}>{children}</span>
  );
};
