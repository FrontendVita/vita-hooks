import type { Meta, StoryObj } from "@storybook/react";

import Demo from "src/hooks/useThrottle/Demo";

const meta: Meta<typeof Demo> = {
  title: "hooks/useThrottle",
  component: Demo,
};

export default meta;
type Story = StoryObj<typeof Demo>;

export const Example: Story = {
  args: {},
};
