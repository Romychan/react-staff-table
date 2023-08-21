import { useState, useMemo } from 'react';

import { selectStatusColor } from '../../utils/selectStatusColor';

import { IColumnTable, TableOrderValue, Users } from '@interfaces/index';

import { useFetch } from '@hooks/useFetch';

import { Badge } from '@ui/Badge/Badge';
import { Profile } from '@components/Profile/Profile';
import { Table } from '@components/Table/Table';
import { Pagination } from '@components/Pagination/Pagination';
import { ToggleTheme } from '@components/ToggleTheme/ToggleTheme';
import { StaffHeader } from '../StaffHeader/StaffHeader';

import styles from './Staff.module.scss';

export const Staff = () => {
  const [queryParams, setQueryParams] = useState({
    _sort: 'id' as keyof Users,
    _order: 'asc' as TableOrderValue,
    company_like: '',
    role_like: '',
    _page: '1',
    q: '',
  });

  const columns: IColumnTable<Users, keyof Users>[] = useMemo(
    () => [
      { label: 'ID', accessor: 'id', width: 90, sortable: true },
      {
        label: 'Profile',
        accessor: 'name',
        width: 350,
        sortable: true,
        Cell: ({ currentData }) => (
          <Profile
            name={currentData.name}
            username={currentData.username}
            imageSrc={currentData.avatar}
          />
        ),
      },
      { label: 'Email', accessor: 'email', width: 280 },
      {
        label: 'Status',
        accessor: 'status',
        width: 130,
        sortable: true,
        Cell: ({ currentData }) => (
          <Badge colorScheme={selectStatusColor(currentData.status)}>
            {currentData.status}
          </Badge>
        ),
      },
      { label: 'Role', accessor: 'role', width: 220 },
      { label: 'Company', accessor: 'company', width: 220 },
    ],
    [],
  );

  const {
    data: users,
    isLoading,
    headers,
  } = useFetch<Users[]>(
    `${import.meta.env.VITE_API_URL}/users?${new URLSearchParams(
      queryParams,
    ).toString()}`,
  );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Staff Management</h1>
        <ToggleTheme />
      </div>

      <StaffHeader setQueryParams={setQueryParams} />

      <Table
        columns={columns}
        data={users || []}
        isLoading={isLoading}
        sorting={{ column: queryParams._sort, order: queryParams._order }}
        handleSorting={(accessor, order) =>
          setQueryParams((prev) => ({
            ...prev,
            _sort: accessor,
            _order: order,
          }))
        }
      />

      <Pagination
        currentPage={Number(queryParams._page)}
        setCurrentPage={(page) =>
          setQueryParams((prev) => ({ ...prev, _page: page.toString() }))
        }
        totalCount={Number(headers?.get('x-total-count')) || 0}
        className={styles.pagination}
      />
    </div>
  );
};
