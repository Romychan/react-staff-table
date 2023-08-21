import { ImgHTMLAttributes } from 'react';
import clsx from 'clsx';

import styles from './Avatar.module.scss';

interface IAvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
  className?: string;
}

export const Avatar = ({ src, alt, className }: IAvatarProps) => {
  return <img src={src} alt={alt} className={clsx(styles.avatar, className)} />;
};
