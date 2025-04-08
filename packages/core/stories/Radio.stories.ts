import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import { Radio, RadioGroup } from "../src";

const meta = {
  title: "Radio",
  component: Radio,
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    setup() {
      const value = ref(null);

      return { value };
    },
    components: { Radio, RadioGroup },
    template: `<RadioGroup v-model="value" orientation="horizontal">
      <Radio value="one">Option 1</Radio>
      <Radio value="two">Option 2</Radio>
      <Radio value="three">Option 3</Radio>
    </RadioGroup>
    <pre>{{ value }}</pre>
    `,
  }),
};

export const VisualTest: Story = {
  render: () => ({
    components: { Radio },
    template: `<div>

    </div>`,
  }),
};
