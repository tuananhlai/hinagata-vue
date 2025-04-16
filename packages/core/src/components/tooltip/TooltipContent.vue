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
const slots = defineSlots<TooltipContentSlots>();

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
  border-radius: 4px;
  padding: 10px 15px;
  font-size: 15px;
  line-height: 1;
  color: var(--grass-11);
  background-color: white;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  user-select: none;
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
}
</style>
