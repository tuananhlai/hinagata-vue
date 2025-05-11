import type { Meta, StoryObj } from "@storybook/vue3";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../src";
import { ref } from "vue";

const meta = {
  title: "DropdownMenu",
  component: DropdownMenu,
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    setup() {
      const items = [
        { id: 1, label: "Item 1" },
        { id: 2, label: "Item 2", disabled: true },
        { id: 3, label: "Item 3" },
      ];

      const selectedItem = ref<number | null>(null);

      return {
        items,
        selectedItem,
      };
    },
    components: {
      DropdownMenuTrigger,
      DropdownMenuContent,
      Button,
      DropdownMenuItem,
      DropdownMenu,
    },
    template: `
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button>Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem 
          v-for="item in items"
          :key="item.id"
          :disabled="item.disabled"
          @select="() => (selectedItem = item.id)"
        >
          {{ item.label }}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    <p>Selected item: {{ selectedItem }}</p>
    `,
  }),
};
