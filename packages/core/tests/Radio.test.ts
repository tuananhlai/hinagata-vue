import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/vue";
import { describe, expect, it } from "vitest";
import { h } from "vue";
import { Radio, RadioGroup } from "../src";

it("should check when clicked", async () => {
  render(RadioGroup, {
    slots: {
      default: h(Radio, { value: "one" }),
    },
  });

  expect(screen.getByRole("radio")).not.toBeChecked();
  await userEvent.click(screen.getByRole("radio"));

  expect(screen.getByRole("radio")).toBeChecked();
});

it("should be uncontrolled when `modelValue` is not set", async () => {
  const { emitted } = render(RadioGroup, {
    slots: {
      default: h(Radio, {
        value: "one",
      }),
    },
  });

  expect(screen.getByRole("radio")).not.toBeChecked();
  await userEvent.click(screen.getByRole("radio"));

  expect(emitted("update:modelValue")?.[0]).toEqual(["one"]);
  expect(screen.getByRole("radio")).toBeChecked();
});

it("should be controlled when `modelValue` is set", async () => {
  const { emitted } = render(RadioGroup, {
    props: {
      modelValue: null,
    },
    slots: {
      default: h(Radio, {
        value: "one",
      }),
    },
  });

  expect(screen.getByRole("radio")).not.toBeChecked();
  await userEvent.click(screen.getByRole("radio"));

  expect(emitted("update:modelValue")?.[0]).toEqual(["one"]);
  expect(screen.getByRole("radio")).not.toBeChecked();
});

it("should be disabled when `disabled` is set", () => {
  render(RadioGroup, {
    slots: {
      default: h(Radio, {
        value: "one",
        disabled: true,
      }),
    },
  });

  expect(screen.getByRole("radio")).toBeDisabled();
});

describe("WAI-ARIA compliance", () => {
  it("should have correct roles", () => {
    render(RadioGroup, {
      slots: {
        default: h({
          template: `
            <Radio value="one">Option 1</Radio>
            <Radio value="two">Option 2</Radio>
          `,
          components: { Radio },
        }),
      },
    });

    expect(screen.getByRole("radiogroup")).toBeInTheDocument();
    expect(screen.getAllByRole("radio")).toHaveLength(2);
  });

  it("should have correct aria states", () => {
    render(RadioGroup, {
      props: {
        defaultValue: "one",
      },
      slots: {
        default: h({
          template: `
            <Radio value="one">Option 1</Radio>
            <Radio value="two">Option 2</Radio>
          `,
          components: { Radio },
        }),
      },
    });

    expect(screen.getByRole("radio", { name: "Option 1" })).toHaveAttribute(
      "aria-checked",
      "true"
    );
    expect(screen.getByRole("radio", { name: "Option 2" })).toHaveAttribute(
      "aria-checked",
      "false"
    );
  });

  it("should set all radios to `required` when `required` is set and no radio is checked", () => {
    render(RadioGroup, {
      props: {
        required: true,
      },
      slots: {
        default: h({
          template: `
            <Radio value="one">Option 1</Radio>
            <Radio value="two">Option 2</Radio>
          `,
          components: { Radio },
        }),
      },
    });

    // We can not use `toBeRequired` matcher because it does not support buttons with role="radio".
    // The following issue is about buttons with role "checkbox", but the problem is the same.
    // https://github.com/testing-library/jest-dom/issues/481
    expect(screen.getByRole("radio", { name: "Option 1" })).toHaveAttribute(
      "required",
      "true"
    );
    expect(screen.getByRole("radio", { name: "Option 2" })).toHaveAttribute(
      "required",
      "true"
    );
  });

  describe("keyboard interactions", () => {
    it("should move focus to checked radio when tabbing in", async () => {
      render(RadioGroup, {
        props: {
          defaultValue: "two",
        },
        slots: {
          default: h({
            template: `
              <Radio value="one">Option 1</Radio>
              <Radio value="two">Option 2</Radio>
              <Radio value="three">Option 3</Radio>
            `,
            components: { Radio },
          }),
        },
      });

      await userEvent.tab();
      expect(screen.getByRole("radio", { name: "Option 2" })).toHaveFocus();
    });

    it("should move focus to first radio when tabbing in if none checked", async () => {
      render(RadioGroup, {
        slots: {
          default: h({
            template: `
              <Radio value="one">Option 1</Radio>
              <Radio value="two">Option 2</Radio>
              <Radio value="three">Option 3</Radio>
            `,
            components: { Radio },
          }),
        },
      });

      await userEvent.tab();
      expect(screen.getByRole("radio", { name: "Option 1" })).toHaveFocus();
    });

    it("should check focused radio when pressing Space", async () => {
      render(RadioGroup, {
        slots: {
          default: h({
            template: `
              <Radio value="one">Option 1</Radio>
              <Radio value="two">Option 2</Radio>
            `,
            components: { Radio },
          }),
        },
      });

      screen.getByRole("radio", { name: "Option 1" }).focus();

      await userEvent.keyboard(" ");
      expect(screen.getByRole("radio", { name: "Option 1" })).toBeChecked();
    });
  });

  /**
   * NOTE: More tests are needed to verify WAI-ARIA compliance. However, some tests are
   * failing only in JSDOM environment, not in real browsers, including:
   * - should move focus and check radio when pressing ArrowRight / ArrowLeft / ArrowUp / ArrowDown.
   * - should loop focus from last to first and vice versa.
   *
   * I will need to take a look at this later.
   */
});
