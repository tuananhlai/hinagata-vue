import type { Meta, StoryObj } from "@storybook/vue3";
import { TextField, TextFieldProps } from "../src";
import { defineComponent, h } from "vue";
import VisualTestGrid from "./utils/VisualTestGrid.vue";

const meta = {
  title: "TextField",
  component: TextField,
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Label",
    description: "Description",
    errorMessage: "Error Message",
  },
};

export const CustomLabel: Story = {
  render: () => ({
    components: { TextField },
    template: `<TextField>
      <template #label>
        <span style="font-family: monospace;">Custom label</span>
      </template>
      <template #description>
        <span style="font-family: monospace;">Custom description</span>
      </template>
      <template #errorMessage>
        <span style="font-family: monospace;">Custom error message</span>
      </template>
    </TextField>`,
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
        <ExampleTextField />
        <ExampleTextField :placeholder="samplePlaceholder" />
        <ExampleTextField :model-value="sampleValue" />
        <ExampleTextField :label="sampleLabel" />
        <ExampleTextField
          :label="sampleLabel"
          :description="sampleDescription"
          :model-value="sampleValue"
        />
        <ExampleTextField
          :label="sampleLabel"
          :description="sampleDescription"
          :model-value="sampleValue"
          disabled
        />
        <ExampleTextField :placeholder="samplePlaceholder" disabled />
        <ExampleTextField
          :label="sampleLabel"
          invalid
          :model-value="sampleValue"
          :error-message="sampleErrorMessage"
        />
        <ExampleTextField
          :label="sampleLabel"
          invalid
          :model-value="sampleValue"
          :error-message="sampleErrorMessage"
          disabled
        />
        <ExampleTextField :label="sampleLabel" required />
        <ExampleTextField
          label="Very very very very long label"
          description="Very very very very long description"
          model-value="Very very very very long value"
          error-message="Very very very very long error message"
          required
          invalid
        />
      </VisualTestGrid>
    `,
    components: { ExampleTextField, VisualTestGrid },
    setup() {
      const sampleLabel = "Label";
      const sampleDescription = "Description";
      const samplePlaceholder = "Placeholder";
      const sampleValue = "Value";
      const sampleErrorMessage = "Error message";

      return {
        sampleLabel,
        sampleDescription,
        samplePlaceholder,
        sampleValue,
        sampleErrorMessage,
      };
    },
  }),
};

const ExampleTextField = defineComponent<TextFieldProps>((props) => {
  return () => h(TextField, props);
});
