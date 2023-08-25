import { ReactNode } from 'react';

export type TableOrderValue = 'asc' | 'desc';

export interface MinTableItem {
  id: string | number;
}

export interface ISortingTable<T, K extends keyof T> {
  /** The column to which the sorting is applied */
  column: K;
  /** Type of sorting */
  order: TableOrderValue;
}

export interface IRenderedCell<T> {
  /** An object with data for a cell with a custom component */
  currentData: T;
}

export interface IColumnTable<T, K extends keyof T> {
  /** Displayed column name */
  label: string;
  /** The key for displaying the data that is taken from the array object. */
  accessor: K;
  /** Availability of sorting for this column */
  sortable?: boolean;
  /** Type of sorting */
  order?: string;
  /** A callback that is used to display a custom component in a table cell */
  Cell?: (props: IRenderedCell<T>) => ReactNode;
  /** Column width */
  width?: number;
}
