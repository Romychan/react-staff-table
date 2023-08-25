import type { Meta, StoryObj } from '@storybook/react';

import {
  MOCK_COLUMNS,
  MOCK_DATA_TABLE,
  MOCK_SORTING,
} from '@tests/mock/tableMockData';

import { Users } from '@interfaces/Users';

import { Table } from './Table';

/** This is a component for displaying information in table. */
const meta: Meta<typeof Table<Users, keyof Users>> = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    columns: MOCK_COLUMNS,
    sorting: MOCK_SORTING,
  },
  argTypes: { handleSorting: { action: 'handleSorting' } },
};

export default meta;
type Story = StoryObj<typeof meta>;

/** This state is used to default. */
export const Default: Story = {
  args: {
    data: MOCK_DATA_TABLE,
    isLoading: false,
  },
};

/** This state is used if data is being loaded. */
export const Loading: Story = {
  args: {
    data: [],
    isLoading: true,
  },
};

/** This state is used if the data array is empty. */
export const Empty: Story = {
  args: {
    data: [],
    isLoading: false,
  },
};
