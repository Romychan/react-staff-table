import { SVGProps } from 'react';
import clsx from 'clsx';

import IconsSVG from '../../assets/img/general/icons.svg';

interface IIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

export const Icon = ({
  name,
  color = '',
  size = 16,
  className = '',
}: IIconProps) => (
  <svg
    className={clsx(`icon icon-${name}`, className)}
    stroke={color}
    width={size}
    height={size}
    data-testid="icon"
  >
    <use xlinkHref={`${IconsSVG}#${name}`} />
  </svg>
);
