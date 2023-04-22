import {
  DEFAULT_THEME,
  withTailwindTheme,
} from "./withTailwindTheme.decorator";

import type { Preview } from "@storybook/react";

import '../src/styles/tailwind.css'; 

const preview: Preview = {
  decorators: [withTailwindTheme],
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global theme for components",
      defaultValue: DEFAULT_THEME,
      toolbar: {
        icon: "paintbrush",
        // Array of plain string values or MenuItem shape (see below)
        items: [
          { value: "light", title: "Light", left: "🌞" },
          { value: "dark", title: "Dark", left: "🌛" },
        ],
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
