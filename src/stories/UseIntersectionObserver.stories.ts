import type { Meta, StoryObj } from "@storybook/react";

import Demo from "src/hooks/useIntersectionObserver/Demo";

const meta: Meta<typeof Demo> = {
  title: "hooks/useIntersectionObserver",
  component: Demo,
};

export default meta;
type Story = StoryObj<typeof Demo>;

export const Example: Story = {
  args: {},
};
