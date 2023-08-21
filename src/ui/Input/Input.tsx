import { InputHTMLAttributes } from 'react';
import clsx from 'clsx';

import styles from './Input.module.scss';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean | string;
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
