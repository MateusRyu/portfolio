import type { StoryObj } from "@storybook/react";

import H1 from "./H1";
import {
  meta,
  AllProps,
  BasicProps,
  BasicPropsWithClassName,
  BasicPropsWithID,
} from "./HeadingPropsAndMeta";

const Meta = {
  ...meta,
  title: "Components/Typography/H1",
  component: H1,
  tags: ["autodocs"],
};

export default Meta;

type Story = StoryObj<typeof meta>;

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
