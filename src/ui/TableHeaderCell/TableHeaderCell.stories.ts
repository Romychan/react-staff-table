import type { Meta, StoryObj } from '@storybook/react';

import { TableHeaderCell } from './TableHeaderCell';

/** This component is used together with the `TableHeader` to display column names. */
const meta: Meta<typeof TableHeaderCell> = {
  title: 'UI/TableHeaderCell',
  component: TableHeaderCell,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    isActive: false,
    order: 'asc',
    width: 200,
  },
  argTypes: { onClick: { action: 'onClick' } },
};

export default meta;
type Story = StoryObj<typeof meta>;

/** This state is used to default. */
export const Default: Story = {
  args: {
    isSortable: false,
    children: 'Default',
  },
};

/** This state is used for ascending sorting. */
export const AscSorting: Story = {
  args: {
    isActive: true,
    isSortable: true,
    children: 'Asc Sorting',
  },
};

/** This state is used to sort in descending order. */
export const DescSorting: Story = {
  args: {
    isActive: true,
    isSortable: true,
    order: 'desc',
    children: 'Desc Sorting',
  },
};
