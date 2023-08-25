import type { Preview } from '@storybook/react';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import { withThemeByClassName } from '@storybook/addon-styling';

import { ThemeContainer } from './containers/ThemeContainer';

import '../src/assets/styles/style.scss';

initialize({
  onUnhandledRequest: 'bypass',
});

export const decorators = [
  mswDecorator,
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
  }),
];

const preview: Preview = {
  parameters: {
    controls: { sort: 'requiredFirst', expanded: true },
    actions: {
      argTypesRegex: '^on[A-Z].*',
    },
    docs: {
      container: ThemeContainer,
    },
  },
};

export default preview;
