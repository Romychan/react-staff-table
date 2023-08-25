import { addons } from '@storybook/manager-api';

import myTheme from './themes/theme';

addons.setConfig({
  theme: myTheme,
});
