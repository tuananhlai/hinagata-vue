import type { Meta, StoryObj } from "@storybook/vue3";

import { useTemplateRef, watch } from "vue";
import { Button } from "../src";
import VisualTestGrid from "./utils/VisualTestGrid.vue";

const meta = {
  title: "Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { Button },
    setup() {
      const buttonRefVar = useTemplateRef("button-ref");

      watch(buttonRefVar, (value) => {
        console.log(value);
      });

      return {
        buttonRef: buttonRefVar,
      };
    },
    template: `<div style="display: flex; gap: 1rem;">
      <Button ref="button-ref">Click me</Button>
      <Button variant="secondary">Click me</Button>
      <Button variant="tertiary">Click me</Button>
    </div>`,
  }),
};

export const VisualTest: Story = {
  parameters: {
    chromatic: {
      disableSnapshot: false,
    },
    pseudo: {
      hover: ".hover > *",
    },
  },
  render: () => ({
    components: { Button, VisualTestGrid },
    template: `
      <VisualTestGrid :cellWidth="100">
        <Button>Button</Button>
        <Button variant="secondary">Button</Button>
        <Button variant="tertiary">Button</Button>
        <Button disabled>Button</Button>
        <Button variant="secondary" disabled>Button</Button>
        <Button variant="tertiary" disabled>Button</Button>
      </VisualTestGrid>
      
      <VisualTestGrid style="margin-top: 40px" class="hover" :cellWidth="100">
        <Button>Button</Button>
        <Button variant="secondary">Button</Button>
        <Button variant="tertiary">Button</Button>
      </VisualTestGrid>
    `,
  }),
};
