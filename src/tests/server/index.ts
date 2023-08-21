import { setupServer } from 'msw/node';
import { usersHandler } from './usersHandler';

export const server = setupServer(usersHandler);
