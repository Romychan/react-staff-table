import type { Meta, StoryObj } from '@storybook/react';

import { Dropdown } from './Dropdown';
import { DropdownItem } from '../DropdownItem/DropdownItem';

import { Unselected, Selected } from '../DropdownItem/DropdownItem.stories';

/** This component is used to select an item from the list of options. */
const meta: Meta<typeof Dropdown> = {
  title: 'UI/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  argTypes: { onChange: { action: 'onChange' } },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

/** This state is used to default. */
export const Default: Story = {
  render: (args) => (
    <Dropdown {...args}>
      <DropdownItem {...Selected.args} value="item #1">
        Item #1
      </DropdownItem>
      <DropdownItem {...Unselected.args} value="item #2">
        Item #2
      </DropdownItem>
      <DropdownItem {...Unselected.args} value="item #3">
        Item #3
      </DropdownItem>
    </Dropdown>
  ),
};

/** This state is used to display the dropdown label. */
export const WithLabel: Story = {
  args: {
    label: 'Dropdown',
  },
  render: (args) => (
    <Dropdown {...args}>
      <DropdownItem {...Selected.args} value="item #1">
        Item #1
      </DropdownItem>
      <DropdownItem {...Unselected.args} value="item #2">
        Item #2
      </DropdownItem>
      <DropdownItem {...Unselected.args} value="item #3">
        Item #3
      </DropdownItem>
    </Dropdown>
  ),
};
