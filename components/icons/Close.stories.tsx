import type { Meta, StoryObj } from '@Storybook/react';

import Close from './Close';

const meta: Meta = {
  title: 'Components/Icons/Close',
  component: Close
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
