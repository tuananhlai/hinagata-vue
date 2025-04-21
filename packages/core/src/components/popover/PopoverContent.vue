<script lang="ts">
export interface PopoverContentProps extends RekaPopoverContentProps {
  /**
   * The distance in pixels from the trigger.
   * @default 4
   */
  sideOffset?: number;
}

export interface PopoverContentEmits extends RekaPopoverContentEmits {}

export interface PopoverContentSlots {
  default(): void;
}
</script>

<script setup lang="ts">
import {
  PopoverContent,
  PopoverPortal,
  PopoverContentEmits as RekaPopoverContentEmits,
  PopoverContentProps as RekaPopoverContentProps,
  useForwardPropsEmits,
} from "reka-ui";

const props = withDefaults(defineProps<PopoverContentProps>(), {
  sideOffset: 4,
});
const emits = defineEmits<PopoverContentEmits>();
defineSlots<PopoverContentSlots>();

const forwardedPropEmits = useForwardPropsEmits(props, emits);
</script>

<template>
  <PopoverPortal>
    <PopoverContent
      :class="$style.root"
      v-bind="{ ...forwardedPropEmits, ...$attrs }"
    >
      <slot />
    </PopoverContent>
  </PopoverPortal>
</template>

<style lang="scss" module>
.root {
  border: 1px solid
    var(--bw-popover-content-border-color, var(--bw-color-zinc-300));
  border-radius: var(--bw-radius-md);
  color: var(--bw-popover-content-color, var(--bw-color-zinc-900));
  background-color: var(
    --bw-popover-content-background-color,
    var(--bw-color-white)
  );
  padding: var(--bw-space-2-5) var(--bw-space-3);
  box-shadow: var(--bw-shadow-md);
}
</style>
