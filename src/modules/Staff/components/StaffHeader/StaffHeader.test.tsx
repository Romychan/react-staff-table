import {
  fireEvent,
  screen,
  render,
  RenderResult,
} from '@testing-library/react';
import { vi } from 'vitest';

import { StaffHeader } from './StaffHeader';

describe('StaffHeader', () => {
  let container: RenderResult;
  const handleChange = vi.fn();

  beforeEach(() => {
    container = render(<StaffHeader setQueryParams={handleChange} />);
  });

  it('should render correctly', () => {
    const companySelectElement = screen.getByText(/All Company/i);
    const roleSelectElement = screen.getByText(/All Role/i);
    const inputElement = screen.getByTestId('input-field');

    expect(companySelectElement).toBeInTheDocument();
    expect(roleSelectElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
  });

  it('should working correctly select company', () => {
    const companySelectElement = screen.getByText(/All Company/i);

    fireEvent.click(companySelectElement);

    const companySelectItem = screen.getByText(/Google/i);

    fireEvent.click(companySelectItem);

    expect(companySelectItem).not.toBeInTheDocument();

    expect(screen.getByText(/Google/i)).toBeInTheDocument();
  });

  it('should working correctly select role', () => {
    const roleSelectElement = screen.getByText(/All Role/i);

    fireEvent.click(roleSelectElement);

    const roleSelectItem = screen.getByText(/Manager/i);

    fireEvent.click(roleSelectItem);

    expect(roleSelectItem).not.toBeInTheDocument();

    expect(screen.getByText(/Manager/i)).toBeInTheDocument();
  });

  it('should working correctly search input', () => {
    const inputElement = screen.getByTestId<HTMLInputElement>('input-field');
    handleChange.mockImplementation((e) => {
      expect(e.target.value).toBe('test');
    });

    fireEvent.change(inputElement, { target: { value: 'test' } });

    expect(inputElement.value).toBe('test');
    expect(handleChange).toHaveBeenCalled();
  });

  it('should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
