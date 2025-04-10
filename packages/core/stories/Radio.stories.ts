import type { Meta, StoryObj } from "@storybook/vue3";
import { Radio, RadioGroup, RadioGroupField } from "../src";

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

export const Field: Story = {
  render: () => ({
    components: { RadioGroupField, Radio },
    template: `<RadioGroupField label="Radio Group" description="Description" errorMessage="Error Message">
      <Radio value="one">Option 1</Radio>
      <Radio value="two">Option 2</Radio>
      <Radio value="three">Option 3</Radio>
    </RadioGroupField>
  `,
  }),
};
