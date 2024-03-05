import type { Meta, StoryObj } from "@storybook/react";

import H2 from "./H2";
import {
  AllProps,
  BasicProps,
  BasicPropsWithClassName,
  BasicPropsWithID,
} from "./HeadingProps";

const meta: Meta<typeof H2> = {
  title: "Components/Typography/H2",
  component: H2,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof H2>;

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
