import type { Meta, StoryObj } from '@storybook/react';

import { Loader } from './Loader';

/** This component shows that the content is being loaded or processed. */
const meta = {
  title: 'UI/Loader',
  component: Loader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
