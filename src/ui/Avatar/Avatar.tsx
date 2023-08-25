import { ImgHTMLAttributes } from 'react';
import clsx from 'clsx';

import styles from './Avatar.module.scss';

interface IAvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  /** Link to the avatar image */
  src: string;
  /** Alt text for the avatar image */
  alt?: string;
  /** Additional class for the component */
  className?: string;
}

export const Avatar = ({ src, alt, className }: IAvatarProps) => {
  return <img src={src} alt={alt} className={clsx(styles.avatar, className)} />;
};
