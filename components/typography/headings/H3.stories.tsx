import type { Meta, StoryObj } from "@storybook/react";

import H3 from "./H3";
import {
  AllProps,
  BasicProps,
  BasicPropsWithClassName,
  BasicPropsWithID,
} from "./HeadingProps";

const meta: Meta<typeof H3> = {
  title: "Components/Typography/H3",
  component: H3,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof H3>;

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
