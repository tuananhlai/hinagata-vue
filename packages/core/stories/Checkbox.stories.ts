import type { Meta, StoryObj } from "@storybook/vue3";

import { Checkbox, CheckboxProps } from "../src";
import { defineComponent, h } from "vue";
import VisualTestGrid from "./utils/VisualTestGrid.vue";

const meta = {
  title: "Checkbox",
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { Checkbox },
    template: "<Checkbox>Accept terms and conditions</Checkbox>",
  }),
};

export const VisualTest: Story = {
  parameters: {
    chromatic: {
      disableSnapshot: false,
    },
  },
  render: () => ({
    template: `
    <VisualTestGrid>
      <ExampleCheckbox />
      <ExampleCheckbox disabled />
      <ExampleCheckbox :defaultValue="true" />
      <ExampleCheckbox disabled :defaultValue="true" />
      <ExampleCheckbox>
        Option with very very very very very very very very very very very
        long text that should wrap.
      </ExampleCheckbox>
    </VisualTestGrid>
    `,
    components: { ExampleCheckbox, VisualTestGrid },
  }),
};

const ExampleCheckbox = defineComponent<CheckboxProps>((props, context) => {
  return () => h(Checkbox, props, context.slots.default ?? "Example");
});
