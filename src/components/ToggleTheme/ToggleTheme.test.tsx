import {
  RenderResult,
  fireEvent,
  render,
  screen,
} from '@testing-library/react';

import { mockMatchMedia } from '@tests/helpers/mockMatchMedia';

import { ThemeContextProvider } from '@contexts/ThemeContext';

import { ToggleTheme } from './ToggleTheme';

describe('ToggleTheme', () => {
  let container: RenderResult;

  beforeEach(() => {
    mockMatchMedia();
    container = render(
      <ThemeContextProvider>
        <ToggleTheme />
      </ThemeContextProvider>,
    );
  });

  it('should render correctly', () => {
    const toggleElement = screen.getByTestId('switch-toggle');
    const textElement = screen.getByText(/Dark/i);

    expect(toggleElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
  });

  it('should theme change', () => {
    const toggleElement = screen.getByTestId<HTMLInputElement>('switch-toggle');

    expect(toggleElement.checked).toEqual(false);

    fireEvent.click(toggleElement);

    expect(toggleElement.checked).toEqual(true);
  });

  it('should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
