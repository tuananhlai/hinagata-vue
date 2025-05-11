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
  DialogClose,
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
      <Dialog default-open>
        <DialogTrigger>
          <Button>Open</Button>
        </DialogTrigger>
        <DialogContent v-slot="{ close }">
          <DialogClose />
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogBody>
            <TextField label="Name" />
          </DialogBody>
          <DialogActions>
            <Button variant="secondary" @click="close">Close</Button>
            <Button @click="close">Submit</Button>
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
      DialogClose,
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
