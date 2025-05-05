import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/vue";
import { expect, it } from "vitest";
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

const renderExampleDropdownMenu = async (props?: DropdownMenuProps) => {
  const result = render(DropdownMenu, {
    props,
    slots: {
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
    },
  });
  await nextTick();

  return result;
};
