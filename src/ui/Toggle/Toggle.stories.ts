import type { Meta, StoryObj } from '@storybook/react';

import { Toggle } from './Toggle';

/** This component changes the state of the boolean parameter to true or false. */
const meta = {
  title: 'UI/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: { onChange: { action: 'onChange' } },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

/** This state is used to default. */
export const Default: Story = {
  args: {
    checked: false,
  },
};

/** This state is used to set the toggle to the true state. */
export const Checked: Story = {
  args: {
    checked: true,
  },
};
