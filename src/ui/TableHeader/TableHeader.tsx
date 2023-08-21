import { useState } from 'react';

import {
  TableOrderValue,
  IColumnTable,
  ISortingTable,
} from '@interfaces/index';

import { TableHeaderCell } from '../TableHeaderCell/TableHeaderCell';

import styles from './TableHeader.module.scss';

interface ITableHeaderProps<T, K extends keyof T> {
  columns: IColumnTable<T, K>[];
  sorting: ISortingTable<T, K>;
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
            sortKey={sortKey}
            accessor={accessor}
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
