import type { Meta, StoryObj } from '@storybook/react';

import { StaffHeader } from './StaffHeader';

/** This component is used together with `Staff` to display data filtering. */
const meta: Meta<typeof StaffHeader> = {
  title: 'Modules/StaffHeader',
  component: StaffHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: { setQueryParams: { action: 'setQueryParams' } },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
