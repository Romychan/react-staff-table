import { IColumnTable, MinTableItem } from '@interfaces/index';

import { Loader } from '@ui/Loader/Loader';

import styles from './TableBody.module.scss';

interface ITableBodyProps<T, K extends keyof T> {
  data: T[];
  columns: IColumnTable<T, K>[];
  isLoading: boolean;
}

export const TableBody = <T extends MinTableItem, K extends keyof T>({
  data,
  columns,
  isLoading,
}: ITableBodyProps<T, K>) => {
  const renderRows = () => {
    if (!isLoading && !data.length) {
      return (
        <tr className={styles.placeholder}>
          <td colSpan={columns.length}>Empty Data</td>
        </tr>
      );
    } else if (data.length) {
      return data.map((item) => {
        return (
          <tr key={item.id} className={styles.row}>
            {columns.map(({ accessor, Cell }) => (
              <td key={accessor as string} className={styles.cell}>
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
