import type { Meta, StoryObj } from "@storybook/vue3";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  Button,
  DialogActions,
  DialogBody,
  DialogTitle,
  TextField,
} from "../src";

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
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogBody>
            <TextField label="Name" />
          </DialogBody>
          <DialogActions>
            <Button variant="secondary">Close</Button>
            <Button>Submit</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    `,
    components: {
      Dialog,
      DialogTrigger,
      DialogContent,
      Button,
      TextField,
      DialogTitle,
      DialogBody,
      DialogActions,
    },
  }),
};

export const VisualTest: Story = {
  render: () => ({
    components: { Dialog },
    template: `<div>

    </div>`,
  }),
};
