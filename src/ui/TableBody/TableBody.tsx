import { IColumnTable, MinTableItem } from '@interfaces/index';

import { Loader } from '@ui/Loader/Loader';

import styles from './TableBody.module.scss';

interface ITableBodyProps<T, K extends keyof T> {
  /** Sets array of objects to be rendered in the table. */
  data: T[];
  /** Sets table columns */
  columns: IColumnTable<T, K>[];
  /** Sets the visibility of data loading */
  isLoading: boolean;
  /** Sets the visibility of the error */
  isError?: boolean;
}

export const TableBody = <T extends MinTableItem, K extends keyof T>({
  data,
  columns,
  isLoading,
  isError = false,
}: ITableBodyProps<T, K>) => {
  const renderRows = () => {
    if ((!isLoading && !data.length) || isError) {
      return (
        <tr className={styles.placeholder}>
          <td colSpan={columns.length} data-testid="table-body-empty">
            Empty Data
          </td>
        </tr>
      );
    } else if (data.length) {
      return data.map((item, index) => {
        return (
          <tr key={item.id} className={styles.row} aria-rowindex={index}>
            {columns.map(({ accessor, Cell }) => (
              <td
                key={accessor as string}
                className={styles.cell}
                data-testid={`table-body-cell-${accessor as string}`}
              >
                {Cell ? Cell({ currentData: item }) : item[accessor]}
              </td>
            ))}
          </tr>
        );
      });
    } else {
      return (
        <tr className={styles.placeholder}>
          <td colSpan={columns.length}>
            <Loader />
          </td>
        </tr>
      );
    }
  };

  return (
    <tbody data-testid="table-body" className={styles.body}>
      {renderRows()}
    </tbody>
  );
};
