import { fireEvent, screen, render } from '@testing-library/react';
import { vi } from 'vitest';

import {
  MOCK_COLUMNS,
  MOCK_DATA_TABLE,
  MOCK_SORTING,
} from '@tests/mock/tableMockData';

import { Table } from './Table';

describe('Table', () => {
  it('should render correctly', () => {
    const handleClick = vi.fn();

    render(
      <Table
        columns={MOCK_COLUMNS}
        data={MOCK_DATA_TABLE}
        sorting={MOCK_SORTING}
        handleSorting={handleClick}
      />,
    );
    const headerCellText = screen.getByText(/Profile/i);
    const bodyCellText = screen.getByText(/test@test.test/i);

    const headerCellElement = screen.getAllByTestId('table-header-cell')[0];

    expect(headerCellText).toBeInTheDocument();
    expect(bodyCellText).toBeInTheDocument();

    expect(headerCellElement.getAttribute('class')).toMatch(/asc/gi);
  });

  it('should render loading element', () => {
    const handleClick = vi.fn();

    render(
      <Table
        columns={MOCK_COLUMNS}
        data={[]}
        sorting={MOCK_SORTING}
        handleSorting={handleClick}
        isLoading
      />,
    );

    const loaderElement = screen.getByTestId('loader');

    expect(loaderElement).toBeInTheDocument();
  });

  it('should render with empty data', () => {
    const handleClick = vi.fn();

    render(
      <Table
        columns={MOCK_COLUMNS}
        data={[]}
        sorting={MOCK_SORTING}
        handleSorting={handleClick}
      />,
    );

    expect(screen.getByText(/Empty Data/i)).toBeInTheDocument();
  });

  it('should handle click if sortable', () => {
    const handleClick = vi.fn();

    render(
      <Table
        columns={MOCK_COLUMNS}
        data={MOCK_DATA_TABLE}
        sorting={MOCK_SORTING}
        handleSorting={handleClick}
      />,
    );

    const cellHeaderElement = screen.getAllByTestId('table-header-cell')[0];

    expect(cellHeaderElement.getAttribute('class')).toMatch(/asc/gi);

    fireEvent.click(cellHeaderElement);
    expect(handleClick).toHaveBeenCalledTimes(1);

    expect(cellHeaderElement.getAttribute('class')).toMatch(/desc/gi);
  });

  it('should not handle click if not sortable', () => {
    const handleClick = vi.fn();

    render(
      <Table
        columns={MOCK_COLUMNS}
        data={MOCK_DATA_TABLE}
        sorting={MOCK_SORTING}
        handleSorting={handleClick}
      />,
    );
    const cellHeaderElement = screen.getAllByTestId('table-header-cell')[2];

    fireEvent.click(cellHeaderElement);
    expect(handleClick).toHaveBeenCalledTimes(0);
  });

  it('should match snapshot', () => {
    const handleClick = vi.fn();

    const container = render(
      <Table
        columns={MOCK_COLUMNS}
        data={MOCK_DATA_TABLE}
        sorting={MOCK_SORTING}
        handleSorting={handleClick}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
