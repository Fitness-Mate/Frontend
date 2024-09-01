import type { StorybookConfig } from "@storybook/react-vite"
import path from "path"
import svgr from "vite-plugin-svgr"

const config: StorybookConfig = {
  core: {
    builder: "@storybook/builder-vite",
  },
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-viewport",
    "storybook-addon-theme-provider",
    "@storybook/addon-themes",
    "@storybook/addon-storysource",
  ],
  framework: "@storybook/react-vite",
  viteFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "@": path.resolve(__dirname, "../src"),
      }
    }
    return {
      ...config,
      plugins: [...(config.plugins || []), svgr()],
    }
  },
}

export default config
