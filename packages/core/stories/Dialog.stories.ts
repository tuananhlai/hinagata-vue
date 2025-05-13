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
import Placeholder from "./utils/Placeholder.vue";

const meta = {
  title: "Dialog",
  component: Dialog,
  decorators: [
    () => ({
      template: `<div style="width:1200px; height:800px;">
        <story />
      </div>`,
    }),
  ],
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

export const VerticalOverflow: Story = {
  render: () => ({
    template: `
      <Dialog default-open>
        <DialogTrigger>
          <Button>Open</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogBody>
            <Placeholder height="800px" />
          </DialogBody>
        </DialogContent>
      </Dialog>
    `,
    components: {
      Dialog,
      DialogTrigger,
      DialogContent,
      DialogTitle,
      DialogBody,
      Placeholder,
      Button,
    },
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
      <Dialog default-open>
        <DialogTrigger>
          <Button>Open</Button>
        </DialogTrigger>
        <DialogContent v-slot="{ close }">
          <DialogClose />
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, magna non hendrerit vestibulum, mi erat venenatis felis, non ornare lorem mi et turpis. Nullam ac mattis risus. Nulla metus metus, rhoncus in suscipit eu, varius a ipsum. Nunc eget mi sit amet massa aliquam viverra pretium sed risus.
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
