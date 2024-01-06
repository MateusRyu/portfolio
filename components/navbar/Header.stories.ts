import type { Meta, StoryObj } from '@storybook/react';

import Header from './Header';
import { HeaderProps, Item } from './Header';

const meta: Meta = {
  title: 'Components/navbar/Header',
  component: Header
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {
    brandName: 'Brand Name',
    navItems: [
      {label: 'link 1', link: '#1'},
      {label: 'link 2', link: '#2'}
    ]
  },
};
