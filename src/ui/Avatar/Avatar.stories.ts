import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';

/** This component is used to display the users avatar. */
const meta = {
  title: 'UI/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://robohash.org/doloresmollitiaaperiam.png?size=50x50&set=set1',
  },
};
