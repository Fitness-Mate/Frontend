import React from "react"

import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"
import type { Preview } from "@storybook/react"

import { ThemeProvider } from "styled-components"

import GlobalStyles from "../src/styles/GlobalStyles"
import theme from "../src/styles/theme"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        method: "alphabetical",
        order: [
          "Getting Started",
          ["Intro", "Palette", "Typography"],
          "Components",
        ],
      },
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
  decorators: [
    (Story, context) => {
      return (
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Story {...context} />
        </ThemeProvider>
      )
    },
  ],
}

export default preview
