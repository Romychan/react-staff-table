import { ReactNode } from 'react';
import clsx from 'clsx';

import { Icon } from '@ui/Icon/Icon';

import styles from './TableHeaderCell.module.scss';
import { TableOrderValue } from '@interfaces/index';

interface ITableHeaderCellProps {
  /** Sets the availability of sorting for this column */
  isSortable?: boolean;
  /** Sets the current sorting for this column */
  isActive: boolean;
  /** Sets the sorting type */
  order: TableOrderValue;
  /** Sets the width of the column */
  width?: number;
  /** The callback that will be called when sorting is selected. */
  onClick: () => void;
  /** The content of the component */
  children: ReactNode;
}

export const TableHeaderCell = ({
  isSortable,
  isActive,
  order,
  width,
  onClick,
  children,
}: ITableHeaderCellProps) => {
  const isCurrentSortable = isSortable && isActive;
  const isAscSort = isCurrentSortable && order === 'asc';
  const isDescSort = isCurrentSortable && order === 'desc';
  const isDefaultSort = !isAscSort && !isDescSort && isSortable;

  return (
    <th
      onClick={isSortable ? onClick : undefined}
      className={clsx(styles.cell, {
        [styles.sortable]: isSortable,
        [styles.asc]: isAscSort,
        [styles.desc]: isDescSort,
      })}
      style={{ width }}
      data-testid="table-header-cell"
    >
      <div className={styles.container}>
        {isAscSort || isDefaultSort ? (
          <Icon name="arrow" className={styles.icon} size={15} />
        ) : null}
        {isDescSort ? (
          <Icon name="arrow" className={styles.icon} size={15} />
        ) : null}
        {children}
      </div>
    </th>
  );
};
