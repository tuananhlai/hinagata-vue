import type { Preview } from "@storybook/vue3";
import "../src/styles/tokens.css";
import "./storybook.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // Disable Chromatic snapshotting behavior by default
    // to save on Chromatic credits. It should be enabled
    // manually for stories that need it.
    chromatic: {
      disableSnapshot: true,
    },
  },
};

export default preview;
