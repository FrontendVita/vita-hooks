import type { Meta, StoryObj } from "@storybook/react";

import Demo from "src/hooks/useFetch/Demo";

const meta: Meta<typeof Demo> = {
  title: "hooks/useFetch",
  component: Demo,
};

export default meta;
type Story = StoryObj<typeof Demo>;

export const Example: Story = {
  args: {},
};
