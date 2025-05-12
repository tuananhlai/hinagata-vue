import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/vue";
import { describe, expect, it } from "vitest";
import { h, nextTick } from "vue";
import {
  Dialog,
  DialogContent,
  DialogProps,
  DialogTitle,
  DialogTrigger,
} from "../src";

it("should open the dialog when the trigger is clicked", async () => {
  await renderExampleDialog();

  expect(screen.queryByText(exampleDialogContent)).not.toBeInTheDocument();
  await userEvent.click(screen.getByRole("button"));
  expect(screen.getByText(exampleDialogContent)).toBeInTheDocument();
});

it("should be open by default when `defaultOpen` is true", async () => {
  await renderExampleDialog({ defaultOpen: true });

  expect(screen.getByText(exampleDialogContent)).toBeInTheDocument();
});

it("should have the role `dialog`", async () => {
  await renderExampleDialog({ defaultOpen: true });

  expect(screen.getByRole("dialog")).toBeInTheDocument();
});

it("should close when the overlay is clicked", async () => {
  await renderExampleDialog({ defaultOpen: true });

  await userEvent.click(screen.getByTestId("overlay"));

  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
});

it("should expose the `close` function to DialogContent's default slot", async () => {
  render(Dialog, {
    props: {
      defaultOpen: true,
    },
    slots: {
      default: h({
        template: `
        <DialogTrigger>
          <button>Open Dialog</button>
        </DialogTrigger>
        <DialogContent v-slot="{ close }">
          <button @click="close">Close Dialog</button>
        </DialogContent>
        `,
        components: {
          DialogTrigger,
          DialogContent,
        },
      }),
    },
  });
  await nextTick();

  expect(screen.getByRole("dialog")).toBeInTheDocument();
  await userEvent.click(screen.getByRole("button", { name: /close/i }));
  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
});

// https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/
describe("WAI-ARIA Compliance", () => {
  it("should close when the escape key is pressed", async () => {
    await renderExampleDialog({ defaultOpen: true });

    await userEvent.keyboard("{Escape}");

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("should focus the first focusable element when the dialog opens", async () => {
    render(Dialog, {
      slots: {
        default: h({
          template: `
        <DialogTrigger>
          <button>Open Dialog</button>
        </DialogTrigger>
        <DialogContent>
          <button>Focusable 1</button>
          <button>Focusable 2</button>
        </DialogContent>
        `,
          components: {
            DialogTrigger,
            DialogContent,
          },
        }),
      },
    });
    await userEvent.click(screen.getByRole("button"));

    expect(screen.getByRole("button", { name: "Focusable 1" })).toHaveFocus();
  });

  it("should trap focus when the dialog is open", async () => {
    render(Dialog, {
      props: {
        defaultOpen: true,
      },
      slots: {
        default: h({
          template: `
          <DialogContent>
            <button>Focusable 1</button>
          </DialogContent>
          `,
          components: {
            DialogContent,
          },
        }),
      },
    });
    await nextTick();

    const btn = screen.getByRole("button", { name: "Focusable 1" });

    await userEvent.tab();
    expect(btn).toHaveFocus();
    await userEvent.keyboard("{Tab}");
    expect(btn).toHaveFocus();
  });
});

const exampleDialogContent = "Dialog content";

const renderExampleDialog = async (props?: DialogProps) => {
  const result = render(Dialog, {
    props,
    slots: {
      default: h({
        template: `
        <DialogTrigger>
          <button>Open Dialog</button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>${exampleDialogContent}</DialogTitle>
        </DialogContent>
        `,
        components: {
          DialogTrigger,
          DialogContent,
          DialogTitle,
        },
      }),
    },
  });
  await nextTick();

  return result;
};
