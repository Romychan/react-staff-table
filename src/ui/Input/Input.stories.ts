import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

/** This component is used to get user input into a text field. */
const meta = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

/** This state is used to default. */
export const Default: Story = {
  args: {
    value: 'Default',
  },
};

/** This state is used to provide information to the user about the error. */
export const Error: Story = {
  args: {
    value: 'Error',
    error: true,
  },
};
