import type { Meta, StoryObj } from "@storybook/vue3";
import { Dialog, DialogTrigger, DialogContent, Button } from "../src";

const meta = {
  title: "Dialog",
  component: Dialog,
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    template: `
      <Dialog>
        <DialogTrigger>
          <Button>Open</Button>
        </DialogTrigger>
        <DialogContent>
          
        </DialogContent>
      </Dialog>
    `,
    components: { Dialog, DialogTrigger, DialogContent, Button },
  }),
};

export const VisualTest: Story = {
  render: () => ({
    components: { Dialog },
    template: `<div>

    </div>`,
  }),
};
