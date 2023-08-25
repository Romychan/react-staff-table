import { Dispatch, SetStateAction } from 'react';

import { COMPANY_FILTER, ROLE_FILTER } from '../../constants/filters';

import { IQueryParams } from '@modules/Staff/interfaces';

import { useDebounce } from '@hooks/useDebounce';

import { Dropdown } from '@ui/Dropdown/Dropdown';
import { DropdownItem } from '@ui/DropdownItem/DropdownItem';
import { Input } from '@ui/Input/Input';

import styles from './StaffHeader.module.scss';

interface IStaffHeader {
  /** The callback that will be called when the user selects the parameters to filter */
  setQueryParams: Dispatch<SetStateAction<IQueryParams>>;
}

export const StaffHeader = ({ setQueryParams }: IStaffHeader) => {
  const handleSearchDebounce = useDebounce<string>((newValue) =>
    setQueryParams((prev) => ({ ...prev, _page: '1', q: newValue })),
  );

  return (
    <div className={styles.header}>
      <Input
        className={styles.input}
        placeholder="Search..."
        onChange={(event) => handleSearchDebounce(event.target.value)}
      />

      <div className={styles.dropdowns}>
        <Dropdown
          onChange={(value) =>
            setQueryParams((prev) => ({
              ...prev,
              _page: '1',
              company_like: value,
            }))
          }
          className={styles.dropdown}
        >
          {COMPANY_FILTER.map((company) => (
            <DropdownItem key={company.value} value={company.value}>
              {company.label}
            </DropdownItem>
          ))}
        </Dropdown>

        <Dropdown
          onChange={(value) =>
            setQueryParams((prev) => ({
              ...prev,
              _page: '1',
              role_like: value,
            }))
          }
          className={styles.dropdown}
        >
          {ROLE_FILTER.map((role) => (
            <DropdownItem key={role.value} value={role.value}>
              {role.label}
            </DropdownItem>
          ))}
        </Dropdown>
      </div>
    </div>
  );
};
