import userEvent from "@testing-library/user-event";
import {
  render,
  RenderOptions,
  RenderResult,
  screen,
} from "@testing-library/vue";
import { expect, it, vi } from "vitest";
import { h, nextTick, useTemplateRef } from "vue";
import { TextField, TextFieldExpose } from "../src";

it("should render", async () => {
  await renderTextField({});

  expect(screen.getByRole("textbox")).toBeInTheDocument();
});

it("should render a label and associate it with the input when `label` prop is passed", async () => {
  await renderTextField({
    props: {
      label: "example",
    },
  });

  expect(screen.getByRole("textbox", { name: /example/i })).toBeInTheDocument();
});

it("should render a description when `description` prop is passed", async () => {
  await renderTextField({
    props: {
      description: "example",
    },
  });

  const input = screen.getByRole("textbox");
  expect(input).toHaveAccessibleDescription("example");
});

it("should render an error message when `errorMessage` prop is passed", async () => {
  await renderTextField({
    props: {
      errorMessage: "error",
    },
  });

  const input = screen.getByRole("textbox");
  expect(input).toHaveAccessibleDescription("error");
});

it("should accept label, description and errorMessage slots", async () => {
  await renderTextField({
    slots: {
      label: "labelSlot",
      description: "descriptionSlot",
      errorMessage: "errorMessageSlot",
    },
  });

  expect(screen.getByLabelText("labelSlot")).toBeInTheDocument();
  expect(screen.getByText("descriptionSlot")).toBeInTheDocument();
  expect(screen.getByText("errorMessageSlot")).toBeInTheDocument();
});

it("should not render a label when `label` prop is not passed and there is no label slot", async () => {
  await renderTextField({});

  expect(document.querySelector("label")).not.toBeInTheDocument();
});

it("should not render a description or error message when `description` or `errorMessage` prop is not passed and there is no description or errorMessage slot", async () => {
  await renderTextField({});

  expect(screen.getByRole("textbox")).not.toHaveAccessibleDescription();
});

it("should work with `v-model`", async () => {
  const onUpdate = vi.fn();

  await renderTextField({
    props: {
      modelValue: "example",
      "onUpdate:modelValue": onUpdate,
    },
  });

  const input = screen.getByRole("textbox");
  expect(input).toHaveValue("example");

  await userEvent.type(input, "test");

  expect(onUpdate).toHaveBeenCalledWith("exampletest");
});

it("should expose the input element", async () => {
  render(
    h({
      setup() {
        const textFieldRef = useTemplateRef<TextFieldExpose>("text-field-ref");

        return {
          textFieldRef: textFieldRef,
        };
      },
      template: `<TextField ref="text-field-ref" />
        <div data-testid="result">{{ textFieldRef?.input }}</div>
        `,
      components: {
        TextField,
      },
    })
  );
  await nextTick();

  expect(screen.getByTestId("result")).toHaveTextContent(
    "[object HTMLInputElement]"
  );
});

const renderTextField = async (
  opts: RenderOptions<typeof TextField>
): Promise<RenderResult> => {
  const renderResult = render(TextField, opts);

  // Wait for `onMounted` to finish before continuing with
  // the assertions.
  // TODO: Figure out a way to avoid having to called `nextTick`.
  await nextTick();

  return renderResult;
};
