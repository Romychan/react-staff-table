import { HTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

import styles from './DropdownItem.module.scss';

interface IDropdownItem extends HTMLAttributes<HTMLDivElement> {
  /** A unique value for a list item */
  value: string;
  /** Selects the active element */
  active?: boolean;
  /** The callback that will be called when the item is clicked */
  onClick?: () => void;
  /** The content of the component */
  children: ReactNode;
}

export const DropdownItem = ({
  active = false,
  onClick,
  children,
  ...rest
}: IDropdownItem) => {
  return (
    <div
      className={clsx(styles.item, {
        [styles.active]: active,
      })}
      onClick={onClick}
      {...rest}
    >
      {children}
    </div>
  );
};
