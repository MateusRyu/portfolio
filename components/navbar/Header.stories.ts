import type { Meta, StoryObj } from "@storybook/react";

import Header from "./Header";
import { HeaderProps, Item } from "./Header";

const meta: Meta = {
  title: "Components/navbar/Header",
  component: Header,
};

export default meta;

type Story = StoryObj<typeof meta>;

const defaultArgs = {
  brandName: "Brand Name",
  navItems: [
    { label: "Active", link: "#0", active: true },
    { label: "link 1", link: "#1", active: false },
    { label: "link 2", link: "#2", active: false },
  ],
};

export const Default: Story = {
  args: defaultArgs,
};

export const Mobile: Story = {
  args: defaultArgs,
  parameters: {
    viewport: {
      defaultViewport: "sm",
    },
  },
};
