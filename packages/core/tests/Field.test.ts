import { render, screen } from "@testing-library/vue";
import { expect, it } from "vitest";
import { h, nextTick } from "vue";
import { Description, ErrorMessage, Field, Label, TextInput } from "../src";

it("should associate the label with the input", async () => {
  render(Field, {
    slots: {
      default: h({
        template: `<Label>label</Label>
          <TextInput />`,
        components: {
          Label,
          TextInput,
        },
      }),
    },
  });
  await nextTick();

  expect(screen.getByRole("textbox", { name: "label" })).toBeInTheDocument();
});

it("should associate a description with the input", async () => {
  render(Field, {
    slots: {
      default: h({
        template: `<TextInput />
          <Description>description</Description>`,
        components: {
          TextInput,
          Description,
        },
      }),
    },
  });
  await nextTick();

  expect(screen.getByRole("textbox")).toHaveAccessibleDescription(
    "description"
  );
});

it("should associate an error message with the input", async () => {
  render(Field, {
    slots: {
      default: h({
        template: `<TextInput />
          <ErrorMessage>error message</ErrorMessage>`,
        components: {
          TextInput,
          ErrorMessage,
        },
      }),
    },
  });
  await nextTick();

  expect(screen.getByRole("textbox")).toHaveAccessibleDescription(
    "error message"
  );
});

it("should associate label, description and error message with custom IDs", async () => {
  render(Field, {
    slots: {
      default: h({
        template: `<Label id="label">label</Label>
          <TextInput />
          <Description id="description">description</Description>
          <ErrorMessage id="error-message">error message</ErrorMessage>`,
        components: {
          Label,
          TextInput,
          Description,
          ErrorMessage,
        },
      }),
    },
  });
  await nextTick();

  expect(screen.getByRole("textbox", { name: "label" })).toBeInTheDocument();
  expect(screen.getByRole("textbox")).toHaveAccessibleDescription(
    /description/i
  );
  expect(screen.getByRole("textbox")).toHaveAccessibleDescription(
    /error message/i
  );
});
