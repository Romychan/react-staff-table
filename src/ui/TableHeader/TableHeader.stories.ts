import type { Meta, StoryObj } from '@storybook/react';

import { MOCK_COLUMNS, MOCK_SORTING } from '@tests/mock/tableMockData';

import { Users } from '@interfaces/Users';

import { TableHeader } from './TableHeader';

/** This is a component for displaying table column headers. */
const meta: Meta<typeof TableHeader<Users, keyof Users>> = {
  title: 'UI/TableHeader',
  component: TableHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: { handleSorting: { action: 'handleSorting' } },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    columns: MOCK_COLUMNS,
    sorting: MOCK_SORTING,
  },
};
