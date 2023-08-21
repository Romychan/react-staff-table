import { IColumnTable, ISortingTable, Users } from '@interfaces/index';

export const MOCK_COLUMNS: IColumnTable<Users, keyof Users>[] = [
  { label: 'ID', accessor: 'id', sortable: true },
  {
    label: 'Profile',
    accessor: 'name',
    sortable: true,
    Cell: ({ currentData }) => <button>{currentData.name}</button>,
  },
  { label: 'Email', accessor: 'email' },
];

export const MOCK_SORTING: ISortingTable<Users, keyof Users> = {
  column: 'id',
  order: 'asc',
};

export const MOCK_DATA_TABLE: Users[] = [
  {
    id: 1,
    name: 'Gilberte Prin',
    username: 'gprin0',
    email: 'test@test.test',
    role: 'Frontend Developer',
    company: 'Google',
    status: 'online',
    avatar: './test.png',
  },
];
