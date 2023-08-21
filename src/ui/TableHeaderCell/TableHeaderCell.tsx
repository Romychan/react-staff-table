import { PropsWithChildren } from 'react';
import clsx from 'clsx';

import { Icon } from '@ui/Icon/Icon';

import styles from './TableHeaderCell.module.scss';

interface ITableHeaderCellProps<T> {
  isSortable?: boolean;
  sortKey: T;
  accessor: T;
  order: 'asc' | 'desc';
  width?: number;
  onClick: () => void;
}

export const TableHeaderCell = <T,>({
  isSortable,
  sortKey,
  accessor,
  order,
  width,
  onClick,
  children,
}: PropsWithChildren<ITableHeaderCellProps<T>>) => {
  const isCurrentSortable = isSortable && sortKey === accessor;
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
