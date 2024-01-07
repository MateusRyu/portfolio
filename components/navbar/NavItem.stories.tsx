import type { Meta, StoryObj } from '@storybook/react';

import NavItem from './NavItem';
import { NavItemProps } from './NavItem';

const meta: Meta = {
  title: 'Components/navbar/NavItem',
  component: NavItem,
  decorators: [
    (Story) => (
      <ul>
        {Story()}
      </ul>
    )
  ]
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: '#',
    active: false,
    children: 'Default'
  },
};

export const Active: Story = {
  args: {
    href: '#',
    active: true,
    children: 'Active'
  }
}
