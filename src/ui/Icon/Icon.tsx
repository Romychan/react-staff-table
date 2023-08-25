import { SVGProps } from 'react';
import clsx from 'clsx';

import IconsSVG from '../../assets/img/general/icons.svg';

interface IIconProps extends SVGProps<SVGSVGElement> {
  /** Name of the icon displayed */
  name: string;
  /** Sets the icon width and height */
  size?: number;
  /** Sets the icon color */
  color?: string;
  /** Sets the icon stroke-width */
  strokeWidth?: number;
}

export const Icon = ({
  name,
  color = '#000000',
  size = 16,
  className = '',
  strokeWidth = 1,
  ...rest
}: IIconProps) => (
  <svg
    className={clsx(`icon icon-${name}`, className)}
    stroke={color}
    width={size}
    height={size}
    strokeWidth={strokeWidth}
    data-testid="icon"
    {...rest}
  >
    <use xlinkHref={`${IconsSVG}#${name}`} />
  </svg>
);
