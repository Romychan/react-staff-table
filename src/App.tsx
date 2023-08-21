import { ThemeContextProvider } from './contexts/ThemeContext';

import { StaffPage } from './pages/StaffPage';

import './assets/styles/style.scss';

export const App = () => {
  return (
    <ThemeContextProvider>
      <StaffPage />
    </ThemeContextProvider>
  );
};
