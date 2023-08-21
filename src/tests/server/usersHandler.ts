import { rest } from 'msw';

import { MOCK_DATA_TABLE } from '@tests/mock/tableMockData';

export const usersHandler = rest.get(
  `${import.meta.env.VITE_API_URL}/users`,
  (_req, res, ctx) => {
    return res(
      ctx.json(MOCK_DATA_TABLE),
      ctx.set('x-total-count', `${MOCK_DATA_TABLE.length}`),
      ctx.status(200),
    );
  },
);
