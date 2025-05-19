import { render, screen } from "@testing-library/vue";
import { describe, expect, it } from "vitest";
import { h, nextTick } from "vue";
import { Checkbox, CheckboxGroup, CheckboxGroupField } from "../src";

it("should render", () => {
  render(CheckboxGroup, {
    slots: {
      default: h({
        template: `
          <Checkbox value="1">Option 1</Checkbox>
          <Checkbox value="2">Option 2</Checkbox>
          `,
        components: {
          Checkbox,
        },
      }),
    },
  });

  expect(screen.getAllByRole("checkbox")).toHaveLength(2);
});

describe("CheckboxGroupField", () => {
  it("should have role 'group' when a label is provided", () => {
    render(CheckboxGroupField, {
      props: {
        label: "Label",
      },
      slots: {
        default: h({
          template: `<Checkbox value="1">Option 1</Checkbox>`,
          components: { Checkbox },
        }),
      },
    });

    expect(screen.getByRole("group")).toBeInTheDocument();
  });

  it("should have the correct label, description and error message", async () => {
    render(CheckboxGroupField, {
      props: {
        label: "Label",
        description: "Description",
        errorMessage: "Error Message",
      },
      slots: {
        default: h({
          template: `
          <Checkbox value="one">Option 1</Checkbox>
          <Checkbox value="two">Option 2</Checkbox>
          <Checkbox value="three">Option 3</Checkbox>
          `,
          components: { Checkbox },
        }),
      },
    });
    await nextTick();

    expect(screen.getByRole("group")).toHaveAccessibleName("Label");
    expect(screen.getByRole("group")).toHaveAccessibleDescription(
      /Description/
    );
    expect(screen.getByRole("group")).toHaveAccessibleDescription(
      /Error Message/
    );
  });
});
