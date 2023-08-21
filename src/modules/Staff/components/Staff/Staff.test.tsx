import {
  screen,
  render,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { Staff } from './Staff';

import { server } from '@tests/server';
import { mockMatchMedia } from '@tests/utils/mockMatchMedia';

beforeAll(() => {
  server.listen();
  mockMatchMedia();
});
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Staff', () => {
  it('should render correctly', async () => {
    render(<Staff />);

    const cellBodyElement = await screen.findByText(/test@test.test/i);

    expect(cellBodyElement).toBeInTheDocument();
  });

  it('should match snapshot', async () => {
    const container = render(<Staff />);

    await waitForElementToBeRemoved(screen.getByTestId('loader'));

    expect(container).toMatchSnapshot();
  });
});
