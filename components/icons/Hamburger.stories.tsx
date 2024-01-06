import type { Meta, StoryObj } from '@Storybook/react';

import Hamburger from './Hamburger';

const meta: Meta = {
  title: 'Components/Icons/Hamburger',
  component: Hamburger
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    color: 'white'
  },
};

export const Small: Story = {
  args: {
    color: 'white',
    size: 'small'
  }
}
