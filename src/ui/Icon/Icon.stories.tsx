import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from './Icon';

/** This component is a basic svg icon. */
const meta: Meta<typeof Icon> = {
  title: 'UI/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    size: 32,
    color: '#000000',
    strokeWidth: 2,
  },
  argTypes: {
    color: {
      control: {
        type: 'color',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/** This state is used to default. */
export const Default: Story = {
  args: {
    name: 'arrow',
  },
};

/** A list of icons used in the project is displayed here. */
export const AllIcons: Story = {
  render: (args) => {
    return (
      <>
        <Icon {...args} name="arrow" />
        <Icon {...args} name="chevron" />
      </>
    );
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'inline-flex' }}>
        <Story />
      </div>
    ),
  ],
};
