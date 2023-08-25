import type { Meta, StoryObj } from '@storybook/react';

import { Pagination } from './Pagination';

/** This component is used to display page numbering. */
const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: { setCurrentPage: { action: 'setCurrentPage' } },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    currentPage: 1,
    totalCount: 120,
  },
};
