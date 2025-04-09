import type { Meta, StoryObj } from "@storybook/vue3";
import { Radio, RadioGroup } from "../src";

const meta = {
  title: "Radio",
  component: Radio,
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { Radio, RadioGroup },
    template: `<RadioGroup>
      <Radio value="one">Option 1</Radio>
      <Radio value="two">Option 2</Radio>
      <Radio value="three">Option 3</Radio>
    </RadioGroup>
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
