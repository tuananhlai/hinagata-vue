import type { Meta, StoryObj } from "@storybook/vue3";
import { Button, Tooltip, TooltipContent, TooltipTrigger } from "../src";

const meta = {
  title: "Tooltip",
  component: Tooltip,
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { Tooltip, TooltipTrigger, TooltipContent, Button },
    template: `
    <Tooltip>
      <TooltipTrigger as-child>
        <Button>Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Tooltip Content</p>
      </TooltipContent>
    </Tooltip>`,
  }),
};

export const VisualTest: Story = {
  render: () => ({
    components: { Tooltip },
    template: `<div>

    </div>`,
  }),
};
