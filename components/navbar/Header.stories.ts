import type { Meta, StoryObj } from '@Storybook/react';

import Header from './Header';
import { HeaderProps, Item } from './Header';

const meta: Meta = {
  title: 'Components/navbar/Header',
  component: Header
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Mobile: Story = {
  args: {
    brandName: 'Brand Name',
    navItems: [
      {label: 'link 1', link: '#1'},
      {label: 'link 2', link: '#2'}
    ]
  },
};
