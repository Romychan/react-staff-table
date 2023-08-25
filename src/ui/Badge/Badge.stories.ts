import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from './Badge';

/** This component can be used to display the status. */
const meta = {
  title: 'UI/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    colorScheme: 'default',
  },
  argTypes: {
    colorScheme: {
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

/** This state is used to display the default status. */
export const Default: Story = {
  args: {
    children: 'Default',
  },
};

/** This state is used to display the success status. */
export const Success: Story = {
  args: {
    children: 'Success',
    colorScheme: 'green',
  },
};

/** This state is used to display the error status. */
export const Error: Story = {
  args: {
    children: 'Error',
    colorScheme: 'red',
  },
};

/** This state is used to display the warning status. */
export const Warning: Story = {
  args: {
    children: 'Warning',
    colorScheme: 'yellow',
  },
};
