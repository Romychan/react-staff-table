import { screen, render } from '@testing-library/react';

import { MOCK_COLUMNS, MOCK_DATA_TABLE } from '@tests/mock/tableMockData';

import { TableBody } from './TableBody';

describe('TableBody', () => {
  it('should render correctly', () => {
    render(
      <TableBody
        columns={MOCK_COLUMNS}
        data={MOCK_DATA_TABLE}
        isLoading={false}
      />,
    );
    const tableBodyElement = screen.getByTestId('table-body');
    const cellProfileElement = screen.getByRole('button');
    const cellEmailElement = screen.getByText(/test@test.test/i);

    expect(tableBodyElement).toBeInTheDocument();
    expect(cellProfileElement).toBeInTheDocument();
    expect(cellEmailElement).toBeInTheDocument();
  });

  it('should render loading element', () => {
    render(<TableBody columns={MOCK_COLUMNS} data={[]} isLoading={true} />);
    const loaderElement = screen.getByTestId('loader');

    expect(loaderElement).toBeInTheDocument();
  });

  it('should render with empty data', () => {
    render(<TableBody columns={MOCK_COLUMNS} data={[]} isLoading={false} />);

    expect(screen.getByText(/Empty Data/i)).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const container = render(
      <TableBody
        columns={MOCK_COLUMNS}
        data={MOCK_DATA_TABLE}
        isLoading={false}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
