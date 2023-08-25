import { InputHTMLAttributes } from 'react';
import clsx from 'clsx';

import styles from './Input.module.scss';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** This property switches the component to an error state */
  error?: boolean | string;
  /** This property required for a controlled component or initial value */
  value?: string | number;
}

export const Input = ({
  value,
  error,
  className = '',
  ...rest
}: IInputProps) => (
  <input
    value={value}
    className={clsx(styles.input, className, {
      [styles.error]: error,
    })}
    data-testid="input-field"
    {...rest}
  />
);
