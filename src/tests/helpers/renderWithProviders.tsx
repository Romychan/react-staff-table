import { ReactElement } from 'react';

import { ThemeContextProvider } from '@contexts/ThemeContext';

export function renderWithProviders(children: ReactElement) {
  return <ThemeContextProvider>{children}</ThemeContextProvider>;
}
