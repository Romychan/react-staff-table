import type { Meta, StoryObj } from '@storybook/react';

import { DropdownItem } from './DropdownItem';

/** This component is used together with the `Dropdown` to display a list of options. */
const meta = {
  title: 'UI/DropdownItem',
  component: DropdownItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    value: 'item #1',
    children: 'Item',
    active: false,
  },
  argTypes: { onClick: { action: 'onClick' } },
} satisfies Meta<typeof DropdownItem>;

export default meta;
type Story = StoryObj<typeof meta>;

/** This state is used to default. */
export const Unselected: Story = {};

/** This state is used if the menu item is selected. */
export const Selected: Story = {
  args: {
    active: true,
  },
};
