import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/vue";
import { expect, it } from "vitest";
import { Button } from "../src";

it("should have the correct role", () => {
  render(Button);

  expect(screen.getByRole("button")).toBeInTheDocument();
});

it("should have `aria-disabled` set to `true` when `loading` prop is true", () => {
  render(Button, {
    props: {
      loading: true,
    },
  });

  expect(screen.getByRole("button")).toHaveAttribute("aria-disabled", "true");
});

it("should not trigger `click` event when `loading` prop is true", async () => {
  const { emitted } = render(Button, {
    props: {
      loading: true,
    },
  });

  await userEvent.click(screen.getByRole("button"));
  expect(emitted("click")).toBeFalsy();

  await userEvent.keyboard("{Enter}");
  expect(emitted("click")).toBeFalsy();
  expect(emitted("keydown")).toBeFalsy();
  expect(emitted("keyup")).toBeFalsy();
});

it("should trigger `click` event when clicked", async () => {
  const { emitted } = render(Button);

  await userEvent.click(screen.getByRole("button"));

  expect(emitted("click")).toBeTruthy();
});
