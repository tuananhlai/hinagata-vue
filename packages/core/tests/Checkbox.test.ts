import { fireEvent, render, screen } from "@testing-library/vue";
import { expect, it } from "vitest";
import { Checkbox } from "../src";

it("should have the correct role", () => {
  render(Checkbox);
  expect(screen.getByRole("checkbox")).toBeInTheDocument();
});

it("renders properly with default slot content", () => {
  render(Checkbox, {
    slots: {
      default: "Checkbox Label",
    },
  });

  expect(
    screen.getByRole("checkbox", { name: /Checkbox Label/i })
  ).toBeInTheDocument();
});

it("renders with v-model", async () => {
  const { rerender } = render(Checkbox, {
    props: {
      modelValue: false,
    },
    slots: {
      default: "Checkbox Label",
    },
  });

  // Initial state
  const checkbox = screen.getByRole("checkbox", { name: /Checkbox Label/i });
  expect(checkbox).not.toBeChecked();

  // Update v-model
  await rerender({ modelValue: true });
  expect(checkbox).toBeChecked();
});

it("emits update:modelValue when clicked", async () => {
  const { emitted } = render(Checkbox, {
    props: {
      modelValue: false,
    },
    slots: {
      default: "Checkbox Label",
    },
  });

  const checkbox = screen.getByRole("checkbox");
  await fireEvent.click(checkbox);

  expect(emitted("update:modelValue")).toBeTruthy();
  expect(emitted("update:modelValue")?.[0]).toEqual([true]);
});

it("should be disabled when disabled prop is true", () => {
  render(Checkbox, {
    props: {
      modelValue: false,
      disabled: true,
    },
    slots: {
      default: "Checkbox Label",
    },
  });

  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).toBeDisabled();
});
