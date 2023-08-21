import { TableOrderValue, Users } from '@interfaces/index';

export interface IQueryParams {
  _sort: keyof Users;
  _order: TableOrderValue;
  company_like: string;
  role_like: string;
  _page: string;
  q: string;
}
