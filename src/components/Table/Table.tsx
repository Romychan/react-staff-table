import {
  TableOrderValue,
  IColumnTable,
  ISortingTable,
  MinTableItem,
} from '@interfaces/Table';

import { TableHeader } from '@ui/TableHeader/TableHeader';
import { TableBody } from '@ui/TableBody/TableBody';

import styles from './Table.module.scss';

interface ITableProps<T, K extends keyof T> {
  columns: IColumnTable<T, K>[];
  data: T[];
  isLoading?: boolean;
  sorting: ISortingTable<T, K>;
  handleSorting: (accessor: K, order: TableOrderValue) => void;
}

export const Table = <T extends MinTableItem, K extends keyof T>({
  columns,
  data,
  isLoading = false,
  sorting,
  handleSorting,
}: ITableProps<T, K>) => {
  return (
    <table className={styles.table}>
      <TableHeader
        columns={columns}
        sorting={sorting}
        handleSorting={handleSorting}
      />
      <TableBody columns={columns} data={data} isLoading={isLoading} />
    </table>
  );
};
