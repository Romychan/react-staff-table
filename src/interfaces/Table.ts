import { ReactNode } from 'react';

export type TableOrderValue = 'asc' | 'desc';

export interface MinTableItem {
  id: string | number;
}

export interface ISortingTable<T, K extends keyof T> {
  column: K;
  order: TableOrderValue;
}

export interface IRenderedCell<T> {
  currentData: T;
}

export interface IColumnTable<T, K extends keyof T> {
  label: string;
  accessor: K;
  sortable?: boolean;
  order?: string;
  Cell?: (props: IRenderedCell<T>) => ReactNode;
  width?: number;
}
