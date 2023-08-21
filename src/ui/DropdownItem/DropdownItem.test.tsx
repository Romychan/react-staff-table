import {
  fireEvent,
  screen,
  render,
  RenderResult,
} from '@testing-library/react';
import { vi } from 'vitest';

import { DropdownItem } from './DropdownItem';

describe('DropdownItem', () => {
  let container: RenderResult;
  const handleClick = vi.fn();

  beforeEach(() => {
    container = render(<DropdownItem onClick={handleClick}>Test</DropdownItem>);
  });

  it('should render correctly', () => {
    const dropdownItemElement = screen.getByText(/Test/i);
    expect(dropdownItemElement).toBeInTheDocument();
  });

  it('should handle click', () => {
    const dropdownItemElement = screen.getByText(/Test/i);
    fireEvent.click(dropdownItemElement);

    expect(handleClick).toHaveBeenCalled();
  });

  it('should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
