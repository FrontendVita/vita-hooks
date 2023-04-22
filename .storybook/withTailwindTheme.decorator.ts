// .storybook/withTailwindTheme.decorator.js

import { PartialStoryFn, StoryContext } from "@storybook/types";
import { ReactRenderer } from "@storybook/react";
import { useEffect } from "react";

export const DEFAULT_THEME = "light";

export const withTailwindTheme = (
  Story: PartialStoryFn<
    ReactRenderer,
    {
      [x: string]: any;
    }
  >,
  context: StoryContext<
    ReactRenderer,
    {
      [x: string]: any;
    }
  >
) => {
  const { theme } = context.globals;

  useEffect(() => {
    const htmlTag = document.documentElement;

    // Set the "data-mode" attribute on the iFrame html tag
    htmlTag.setAttribute("data-mode", theme || DEFAULT_THEME);
  }, [theme]);

  return Story();
};
