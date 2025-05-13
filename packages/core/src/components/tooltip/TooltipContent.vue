<script lang="ts">
export interface TooltipContentProps extends RekaTooltipContentProps {}

export interface TooltipContentEmits extends RekaTooltipContentEmits {}

export interface TooltipContentSlots {
  default(): void;
}
</script>

<script lang="ts" setup>
import {
  TooltipContentEmits as RekaTooltipContentEmits,
  TooltipContentProps as RekaTooltipContentProps,
  TooltipContent,
  TooltipPortal,
  useForwardPropsEmits,
} from "reka-ui";

const props = withDefaults(defineProps<TooltipContentProps>(), {
  sideOffset: 4,
});
const emits = defineEmits<TooltipContentEmits>();
defineSlots<TooltipContentSlots>();

const forwardedPropEmits = useForwardPropsEmits(props, emits);
</script>

<template>
  <TooltipPortal>
    <TooltipContent
      :class="$style.root"
      v-bind="{ ...forwardedPropEmits, ...$attrs }"
    >
      <slot />
    </TooltipContent>
  </TooltipPortal>
</template>

<style lang="scss" module>
.root {
  border-radius: var(--bw-radius-md);
  color: var(--bw-tooltip-content-color, var(--bw-color-zinc-900));
  background-color: var(
    --bw-tooltip-content-background-color,
    var(--bw-color-white)
  );
  padding: var(--bw-space-2) var(--bw-space-2-5);
  font-size: var(--bw-font-sm);
  box-shadow: var(--bw-shadow-md);
}
</style>
