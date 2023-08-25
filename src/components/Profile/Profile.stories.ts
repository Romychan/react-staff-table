import type { Meta, StoryObj } from '@storybook/react';

import { Profile } from './Profile';

/** This component is used to display the users avatar with his name and username. */
const meta = {
  title: 'Components/Profile',
  component: Profile,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Profile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'First Name',
    username: 'username1',
    imageSrc:
      'https://robohash.org/doloresmollitiaaperiam.png?size=50x50&set=set1',
  },
};
