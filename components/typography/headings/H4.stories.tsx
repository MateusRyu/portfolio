import type { Meta, StoryObj } from "@storybook/react";

import H4 from "./H4";
import {
  AllProps,
  BasicProps,
  BasicPropsWithClassName,
  BasicPropsWithID,
} from "./HeadingProps";

const meta: Meta<typeof H4> = {
  title: "Components/Typography/H4",
  component: H4,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof H4>;

export const Default: Story = {
  args: BasicProps,
};

export const HeadingWithClassNameAndID: Story = {
  args: AllProps,
};

export const HeadingWithClassName: Story = {
  args: BasicPropsWithClassName,
};

export const HeadingWithID: Story = {
  args: BasicPropsWithID,
};
