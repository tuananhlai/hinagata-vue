import userEvent from "@testing-library/user-event";
import { render, RenderOptions, screen } from "@testing-library/vue";
import { expect, it, vi } from "vitest";
import { h, nextTick } from "vue";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuProps,
  DropdownMenuTrigger,
} from "../src";

it("should open the menu when the trigger is clicked", async () => {
  await renderExampleDropdownMenu();
  const trigger = screen.getByRole("button");
  await userEvent.click(trigger);

  expect(screen.getByText("Item 1")).toBeInTheDocument();
});

it("should open the menu by default when `defaultOpen` is true", async () => {
  await renderExampleDropdownMenu({
    defaultOpen: true,
  });

  expect(screen.getByText("Item 1")).toBeInTheDocument();
});

it("should have the correct role", async () => {
  await renderExampleDropdownMenu({
    defaultOpen: true,
  });
  const menu = screen.getByRole("menu");
  const menuItems = screen.getAllByRole("menuitem");

  expect(menu).toBeInTheDocument();
  expect(menuItems).toHaveLength(3);
});

it("should activate the correct item when clicked", async () => {
  const onSelect = vi.fn();

  await renderExampleDropdownMenu(
    {
      defaultOpen: true,
    },
    {
      default: h({
        setup() {
          return {
            onSelect,
          };
        },
        template: `
        <DropdownMenuTrigger>
          <button>Open DropdownMenu</button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem @select="() => onSelect(1)">Item 1</DropdownMenuItem>
          <DropdownMenuItem @select="() => onSelect(2)">Item 2</DropdownMenuItem>
        </DropdownMenuContent>
      `,
        components: {
          DropdownMenuTrigger,
          DropdownMenuContent,
          DropdownMenuItem,
        },
      }),
    }
  );
  const item1 = screen.getByRole("menuitem", { name: "Item 1" });
  await userEvent.click(item1);

  expect(onSelect).toHaveBeenCalledWith(1);
});

const renderExampleDropdownMenu = async (
  props?: DropdownMenuProps,
  slots?: RenderOptions<typeof DropdownMenu>["slots"]
) => {
  const defaultSlots: RenderOptions<typeof DropdownMenu>["slots"] = {
    default: h({
      template: `
        <DropdownMenuTrigger>
          <button>Open DropdownMenu</button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
          <DropdownMenuItem>Item 2</DropdownMenuItem>
          <DropdownMenuItem>Item 3</DropdownMenuItem>
        </DropdownMenuContent>
        `,
      components: {
        DropdownMenuTrigger,
        DropdownMenuContent,
        DropdownMenuItem,
      },
    }),
  };

  slots = slots ?? defaultSlots;

  const result = render(DropdownMenu, {
    props,
    slots,
  });
  await nextTick();

  return result;
};
