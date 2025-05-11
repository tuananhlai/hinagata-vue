import type { Meta, StoryObj } from "@storybook/vue3";
import { Button, Popover, PopoverContent, PopoverTrigger } from "../src";

const meta = {
  title: "Popover",
  component: Popover,
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { Popover, Button, PopoverTrigger, PopoverContent },
    template: `<Popover>
      <PopoverTrigger>
        <Button>Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <p>Popover content</p>
      </PopoverContent>
    </Popover>`,
  }),
};

export const Modal: Story = {
  render: () => ({
    components: { Popover, Button, PopoverTrigger, PopoverContent },
    template: `<Popover modal>
      <PopoverTrigger>
        <Button>Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <p>Popover content</p>
      </PopoverContent>
    </Popover>`,
  }),
};
