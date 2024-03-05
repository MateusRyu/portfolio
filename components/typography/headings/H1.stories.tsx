import type { Meta, StoryObj } from "@storybook/react";

import H1 from "./H1";
import {
  AllProps,
  BasicProps,
  BasicPropsWithClassName,
  BasicPropsWithID,
} from "./HeadingProps";

const meta: Meta<typeof H1> = {
  title: "Components/Typography/H1",
  component: H1,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof H1>;

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
