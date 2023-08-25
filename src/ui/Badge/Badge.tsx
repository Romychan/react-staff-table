import React from 'react';
import clsx from 'clsx';

import styles from './Badge.module.scss';

interface IBadgeProps {
  /** Sets component color scheme */
  colorScheme?: 'default' | 'green' | 'red' | 'yellow';
  /** The content of the component */
  children: React.ReactNode;
}

export const Badge = ({ colorScheme = 'default', children }: IBadgeProps) => {
  return (
    <span className={clsx(styles.badge, styles[colorScheme])}>{children}</span>
  );
};
