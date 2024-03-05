import type { Preview } from "@storybook/react";
import React from "react";

import "../app/globals.css";
import { Primary } from "../components/typography/Typefaces";

const customViewports = {
  xs: {
    name: "Small mobile - breakpoint: xs",
    styles: {
      width: "320px",
      height: "568px",
    },
  },
  xsl: {
    name: "Small mobile (landscape) - breakpoint: sm",
    styles: {
      width: "568px",
      height: "320px",
    },
  },
  sm: {
    name: "Large mobile - breakpoint: sm",
    styles: {
      width: "384px",
      height: "896px",
    },
  },
  sml: {
    name: "Large mobile (landscape) - breakpoint: md",
    styles: {
      width: "896px",
      height: "384px",
    },
  },
  md: {
    name: "Tablet - breakpoint: md",
    styles: {
      width: "768px",
      height: "1024px",
    },
  },
  lg: {
    name: "Tablet (landscape) - breakpoint: lg",
    styles: {
      width: "1024px",
      height: "768px",
    },
  },
};

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className={`bg-neutral ${Primary.variable}`}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: { viewports: customViewports },
  },
};

export default preview;
