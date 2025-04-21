import { render, screen } from "@testing-library/vue";
import { expect, it } from "vitest";
import { h } from "vue";
import { Checkbox, CheckboxGroup } from "../src";

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
