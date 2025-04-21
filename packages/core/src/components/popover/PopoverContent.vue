<script lang="ts">
export interface PopoverContentProps extends RekaPopoverContentProps {}

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

const props = defineProps<PopoverContentProps>();
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
}
</style>
