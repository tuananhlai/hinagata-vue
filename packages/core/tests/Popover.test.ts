import { it, expect, vi } from "vitest";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverProps,
  PopoverTrigger,
} from "../src";
import { render, screen } from "@testing-library/vue";
import { h, nextTick } from "vue";
import userEvent from "@testing-library/user-event";

it("should open when trigger is clicked", async () => {
  await renderExamplePopover();

  expect(screen.queryByText(examplePopoverContent)).not.toBeInTheDocument();
  await userEvent.click(screen.getByRole("button"));
  expect(screen.getByText(examplePopoverContent)).toBeInTheDocument();
});

it("should be open by default when `defaultOpen` is true", async () => {
  await renderExamplePopover({ defaultOpen: true });
  expect(screen.getByText(examplePopoverContent)).toBeInTheDocument();
});

it("should close when the user clicks outside of the popover", async () => {
  await renderExamplePopover({ defaultOpen: true });

  await userEvent.click(document.body);
  expect(screen.queryByText(examplePopoverContent)).not.toBeInTheDocument();
});

it("should be non-modal by default", async () => {
  const onClick = vi.fn();

  render(
    h({
      setup() {
        return { onClick };
      },
      template: `<Popover default-open>
      <PopoverTrigger as-child>
        <Button>Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <p>Popover content</p>
      </PopoverContent>
    </Popover>
    <Button @click="onClick">Second button</Button>
    `,
      components: { Button, PopoverTrigger, PopoverContent, Popover },
    })
  );

  await userEvent.click(screen.getByRole("button", { name: "Second button" }));
  expect(onClick).toHaveBeenCalled();
});

it("should be modal when `modal` is true", async () => {
  const onClick = vi.fn();

  render(
    h({
      setup() {
        return { onClick };
      },
      template: `<Popover default-open modal>
    <PopoverTrigger as-child>
      <Button>Open Popover</Button>
    </PopoverTrigger>
    <PopoverContent>
      <p>Popover content</p>
    </PopoverContent>
  </Popover>
  <Button @click="onClick">Second button</Button>
  `,
      components: { Button, PopoverTrigger, PopoverContent, Popover },
    })
  );

  // Check that the outside button is hidden.
  expect(
    screen.getByRole("button", { name: "Second button", hidden: true })
  ).toBeInTheDocument();
});

it("should trap focus within the popover", async () => {
  await renderExamplePopover({ defaultOpen: true });

  expect(screen.getByRole("button", { name: "Example" })).toHaveFocus();
  await userEvent.keyboard("{tab}");
  expect(screen.getByRole("button", { name: "Example" })).toHaveFocus();
});

it("should close when the escape key is pressed", async () => {
  await renderExamplePopover({ defaultOpen: true });

  await userEvent.keyboard("{escape}");
  expect(screen.queryByText(examplePopoverContent)).not.toBeInTheDocument();
});

/** A piece of text that is rendered inside the popover. */
const examplePopoverContent = "Popover content";

const renderExamplePopover = async (props?: PopoverProps) => {
  const result = render(Popover, {
    props,
    slots: {
      default: h({
        template: `<PopoverTrigger as-child>
            <Button>Open Popover</Button>
          </PopoverTrigger>
          <PopoverContent>
            <p>${examplePopoverContent}</p>
            <Button>Example</Button>
          </PopoverContent>`,
        components: { Button, PopoverTrigger, PopoverContent },
      }),
    },
  });
  await nextTick();

  return result;
};
