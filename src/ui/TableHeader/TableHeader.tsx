import { useState } from 'react';

import {
  TableOrderValue,
  IColumnTable,
  ISortingTable,
} from '@interfaces/index';

import { TableHeaderCell } from '../TableHeaderCell/TableHeaderCell';

import styles from './TableHeader.module.scss';

interface ITableHeaderProps<T, K extends keyof T> {
  /** Sets table columns */
  columns: IColumnTable<T, K>[];
  /**  Sets parameters for sorting */
  sorting: ISortingTable<T, K>;
  /** The callback that will be called when sorting is selected. */
  handleSorting: (accessor: K, order: TableOrderValue) => void;
}

export const TableHeader = <T, K extends keyof T>({
  columns,
  sorting,
  handleSorting,
}: ITableHeaderProps<T, K>) => {
  const [sortKey, setSortKey] = useState<K>(sorting.column);
  const [order, setOrder] = useState(sorting.order);

  const handleSortingChange = (accessor: K) => {
    const sortOrder = order === 'asc' ? 'desc' : 'asc';

    setSortKey(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };

  return (
    <thead className={styles.header}>
      <tr className={styles.row}>
        {columns.map(({ label, accessor, sortable, width }) => (
          <TableHeaderCell
            key={accessor as string}
            isSortable={sortable}
            isActive={accessor === sortKey}
            order={order}
            width={width}
            onClick={() => handleSortingChange(accessor)}
          >
            {label}
          </TableHeaderCell>
        ))}
      </tr>
    </thead>
  );
};
