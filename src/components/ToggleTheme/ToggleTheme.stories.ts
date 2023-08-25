import type { Meta, StoryObj } from '@storybook/react';

import { ToggleTheme } from './ToggleTheme';

/** This component is used to toggle themes. */
const meta = {
  title: 'Components/ToggleTheme',
  component: ToggleTheme,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ToggleTheme>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
