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
  /** Sets table columns */
  columns: IColumnTable<T, K>[];
  /** Sets array of objects to be rendered in the table. */
  data: T[];
  /** Sets the visibility of data loading */
  isLoading?: boolean;
  /** Sets the visibility of the error */
  isError?: boolean;
  /**  Sets parameters for sorting */
  sorting: ISortingTable<T, K>;
  /** The callback that will be called when sorting is selected. */
  handleSorting: (accessor: K, order: TableOrderValue) => void;
}

export const Table = <T extends MinTableItem, K extends keyof T>({
  columns,
  data,
  isLoading = false,
  isError = false,
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
      <TableBody
        columns={columns}
        data={data}
        isLoading={isLoading}
        isError={isError}
      />
    </table>
  );
};
