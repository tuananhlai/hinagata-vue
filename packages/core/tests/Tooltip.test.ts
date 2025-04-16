import { render, screen } from "@testing-library/vue";
import { expect, it } from "vitest";
import { h, nextTick } from "vue";
import { Provider, Tooltip, TooltipContent, TooltipTrigger } from "../src";

it("should provide description to the trigger when the tooltip is open", async () => {
  render(
    h({
      template: `
    <Provider>
      <Tooltip default-open>
        <TooltipTrigger as-child>
          <button>Hover me</button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Tooltip Content</p>
        </TooltipContent>
      </Tooltip>
    </Provider>
    `,
      components: {
        Provider,
        Tooltip,
        TooltipTrigger,
        TooltipContent,
      },
    })
  );
  await nextTick();

  expect(screen.getByRole('button')).toHaveAccessibleDescription('Tooltip Content');
});
