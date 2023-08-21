import {
  fireEvent,
  screen,
  render,
  RenderResult,
} from '@testing-library/react';
import { vi } from 'vitest';

import { Toggle } from './Toggle';

describe('Toggle', () => {
  let container: RenderResult;
  const handleChange = vi.fn();

  beforeEach(() => {
    container = render(<Toggle checked={false} onChange={handleChange} />);
  });

  it('should render correctly', () => {
    const inputElement = screen.getByTestId<HTMLInputElement>('switch-toggle');

    expect(inputElement).toBeInTheDocument();
  });

  it('should handle change working correctly', () => {
    const inputElement = screen.getByTestId<HTMLInputElement>('switch-toggle');

    fireEvent.click(inputElement);
    expect(handleChange).toHaveBeenCalled();
  });

  it('should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
