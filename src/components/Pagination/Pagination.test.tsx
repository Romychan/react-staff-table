import { fireEvent, screen, render } from '@testing-library/react';
import { vi } from 'vitest';

import { Pagination } from './Pagination';

describe('Pagination', () => {
  it('should render correctly', () => {
    const handleClick = vi.fn();

    render(
      <Pagination
        currentPage={1}
        setCurrentPage={handleClick}
        totalCount={100}
      />,
    );
    const paginationElement = screen.getByTestId('pagination');
    const ellipsisElement = screen.getByRole('button', { name: '...' });

    expect(paginationElement).toBeInTheDocument();
    expect(ellipsisElement).toBeInTheDocument();
  });

  it('should be disable prev button if the first page is selected', () => {
    const handleClick = vi.fn();

    render(
      <Pagination
        currentPage={1}
        setCurrentPage={handleClick}
        totalCount={20}
      />,
    );

    const prevButtonElement = screen.getByText(/prev/i);

    expect(prevButtonElement.getAttribute('class')).toMatch(/disabled/gi);
    expect(prevButtonElement).toHaveAttribute('disabled');
  });

  it('should disable next button if the last page is selected', () => {
    const handleClick = vi.fn();

    render(
      <Pagination
        currentPage={2}
        setCurrentPage={handleClick}
        totalCount={20}
      />,
    );

    const nextButtonElement = screen.getByText(/next/i);

    expect(nextButtonElement.getAttribute('class')).toMatch(/disabled/gi);
    expect(nextButtonElement).toHaveAttribute('disabled');
  });

  it('should called handleClick after click prev button', () => {
    const handleClick = vi.fn();

    render(
      <Pagination
        currentPage={6}
        setCurrentPage={handleClick}
        totalCount={100}
      />,
    );

    const prevButtonElement = screen.getByText(/prev/i);

    fireEvent.click(prevButtonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should called handleClick after click next button', () => {
    const handleClick = vi.fn();

    render(
      <Pagination
        currentPage={6}
        setCurrentPage={handleClick}
        totalCount={100}
      />,
    );

    const nextButtonElement = screen.getByText(/next/i);

    fireEvent.click(nextButtonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should match snapshot', () => {
    const handleClick = vi.fn();
    const container = render(
      <Pagination
        currentPage={6}
        setCurrentPage={handleClick}
        totalCount={100}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
