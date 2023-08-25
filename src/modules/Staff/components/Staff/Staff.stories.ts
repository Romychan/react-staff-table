import type { Meta, StoryObj } from '@storybook/react';

import { usersHandler } from '@tests/server/usersHandler';

import { Staff } from './Staff';

/** This component is used to display staff. */
const meta: Meta<typeof Staff> = {
  title: 'Modules/Staff',
  component: Staff,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    msw: [usersHandler],
  },
};
