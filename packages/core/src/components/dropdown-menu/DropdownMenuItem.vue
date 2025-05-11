<script lang="ts">
export interface DropdownMenuItemProps extends RekaDropdownMenuItemProps {}

export interface DropdownMenuItemEmits extends RekaDropdownMenuItemEmits {}

export interface DropdownMenuItemSlots {
  default(): void;
}
</script>

<script lang="ts" setup>
import {
  DropdownMenuItem as RekaDropdownMenuItem,
  DropdownMenuItemProps as RekaDropdownMenuItemProps,
  DropdownMenuItemEmits as RekaDropdownMenuItemEmits,
  useForwardPropsEmits,
} from "reka-ui";

const props = defineProps<DropdownMenuItemProps>();
const emits = defineEmits<DropdownMenuItemEmits>();
defineSlots<DropdownMenuItemSlots>();

const forwardedPropEmits = useForwardPropsEmits(props, emits);
</script>

<template>
  <RekaDropdownMenuItem :class="$style.root" v-bind="forwardedPropEmits">
    <slot />
  </RekaDropdownMenuItem>
</template>

<style lang="scss" module>
.root {
  padding: var(--bw-space-2-5) var(--bw-space-3);
  outline: none;
  width: 100%;
  user-select: none;

  &:where(:hover:not([data-disabled])) {
    cursor: pointer;
  }

  &:where(:focus) {
    background-color: var(--bw-color-primary);
    color: var(--bw-color-white);
  }

  &:where([data-disabled]) {
    color: var(--bw-color-zinc-400);
  }
}
</style>
