import { fireEvent, screen, render } from '@testing-library/react';
import { vi } from 'vitest';

import { TableHeaderCell } from './TableHeaderCell';

describe('TableHeaderCell', () => {
  it('should render correctly', () => {
    const handleClick = vi.fn();

    render(
      <TableHeaderCell
        isSortable
        sortKey="profile"
        accessor="name"
        order="asc"
        onClick={handleClick}
      >
        Test
      </TableHeaderCell>,
    );
    const cellElement = screen.getByTestId('table-header-cell');
    const containerElement = screen.getByText(/Test/i);
    const iconElement = screen.getByTestId('icon');

    expect(containerElement).toBeInTheDocument();
    expect(cellElement.getAttribute('class')).toMatch(/sortable/gi);
    expect(iconElement.getAttribute('class')).toMatch(/icon-arrow/gi);
  });

  it('should handle click if sortable', () => {
    const handleClick = vi.fn();

    render(
      <TableHeaderCell
        isSortable
        sortKey="name"
        accessor="name"
        order="asc"
        onClick={handleClick}
      >
        Test
      </TableHeaderCell>,
    );
    const cellElement = screen.getByTestId('table-header-cell');

    fireEvent.click(cellElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should not handle click if not sortable', () => {
    const handleClick = vi.fn();

    render(
      <TableHeaderCell
        isSortable={false}
        sortKey="profile"
        accessor="name"
        order="asc"
        onClick={handleClick}
      >
        Test
      </TableHeaderCell>,
    );
    const cellElement = screen.getByTestId('table-header-cell');
    const iconElement = screen.queryByTestId('icon');

    expect(iconElement).not.toBeInTheDocument();

    fireEvent.click(cellElement);
    expect(handleClick).toHaveBeenCalledTimes(0);
  });

  it('should show asc sorting if selected and sortable', () => {
    const handleClick = vi.fn();

    render(
      <TableHeaderCell
        isSortable
        sortKey="name"
        accessor="name"
        order="asc"
        onClick={handleClick}
      >
        Test
      </TableHeaderCell>,
    );
    const cellElement = screen.getByTestId('table-header-cell');
    const iconElement = screen.getByTestId('icon');

    expect(cellElement.getAttribute('class')).toMatch(/asc/gi);
    expect(iconElement.getAttribute('class')).toMatch(/icon-arrow/gi);
  });

  it('should show desc sorting if selected and sortable', () => {
    const handleClick = vi.fn();

    render(
      <TableHeaderCell
        isSortable
        sortKey="name"
        accessor="name"
        order="desc"
        onClick={handleClick}
      >
        Test
      </TableHeaderCell>,
    );
    const cellElement = screen.getByTestId('table-header-cell');
    const iconElement = screen.getByTestId('icon');

    expect(cellElement.getAttribute('class')).toMatch(/desc/gi);
    expect(iconElement.getAttribute('class')).toMatch(/icon-arrow/gi);
  });

  it('should match snapshot', () => {
    const handleClick = vi.fn();
    const container = render(
      <TableHeaderCell
        isSortable
        sortKey="profile"
        accessor="name"
        order="asc"
        onClick={handleClick}
      >
        Test
      </TableHeaderCell>,
    );

    expect(container).toMatchSnapshot();
  });
});
