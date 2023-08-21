import { fireEvent, screen, render } from '@testing-library/react';
import { vi } from 'vitest';

import { MOCK_COLUMNS, MOCK_SORTING } from '@tests/mock/tableMockData';

import { TableHeader } from './TableHeader';

describe('TableHeader', () => {
  it('should render correctly', () => {
    const handleClick = vi.fn();

    render(
      <TableHeader
        columns={MOCK_COLUMNS}
        sorting={MOCK_SORTING}
        handleSorting={handleClick}
      />,
    );
    const columnElement = screen.getByText(/Profile/i);

    expect(columnElement).toBeInTheDocument();
  });

  it('should handle click if sortable', () => {
    const handleClick = vi.fn();

    render(
      <TableHeader
        columns={MOCK_COLUMNS}
        sorting={MOCK_SORTING}
        handleSorting={handleClick}
      />,
    );

    const cellElement = screen.getAllByTestId('table-header-cell')[0];
    const iconElement = screen.getAllByTestId('icon')[0];

    expect(cellElement.getAttribute('class')).toMatch(/asc/gi);
    expect(iconElement.getAttribute('class')).toMatch(/icon-arrow/gi);

    fireEvent.click(cellElement);
    expect(handleClick).toHaveBeenCalledTimes(1);

    expect(cellElement.getAttribute('class')).toMatch(/desc/gi);
  });

  it('should not handle click if not sortable', () => {
    const handleClick = vi.fn();

    render(
      <TableHeader
        columns={MOCK_COLUMNS}
        sorting={MOCK_SORTING}
        handleSorting={handleClick}
      />,
    );
    const cellElement = screen.getAllByTestId('table-header-cell')[2];

    fireEvent.click(cellElement);
    expect(handleClick).toHaveBeenCalledTimes(0);
  });

  it('should match snapshot', () => {
    const handleClick = vi.fn();
    const container = render(
      <TableHeader
        columns={MOCK_COLUMNS}
        sorting={MOCK_SORTING}
        handleSorting={handleClick}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
