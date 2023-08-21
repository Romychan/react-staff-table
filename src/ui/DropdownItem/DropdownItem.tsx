import { HTMLAttributes, PropsWithChildren } from 'react';
import clsx from 'clsx';

import styles from './DropdownItem.module.scss';

interface IDropdownItem extends HTMLAttributes<HTMLDivElement> {
  active?: boolean;
  value?: string;
}

export const DropdownItem = ({
  active,
  children,
  ...rest
}: PropsWithChildren<IDropdownItem>) => {
  return (
    <div
      className={clsx(styles.item, {
        [styles.active]: active,
      })}
      {...rest}
    >
      {children}
    </div>
  );
};
