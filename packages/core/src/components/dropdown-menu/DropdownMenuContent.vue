<script lang="ts">
export interface DropdownMenuContentProps
  extends RekaDropdownMenuContentProps {}

export interface DropdownMenuContentSlots {
  default(): void;
}
</script>

<script lang="ts" setup>
import {
  DropdownMenuPortal,
  DropdownMenuContent as RekaDropdownMenuContent,
  DropdownMenuContentProps as RekaDropdownMenuContentProps,
} from "reka-ui";

const props = withDefaults(defineProps<DropdownMenuContentProps>(), {
  sideOffset: 4,
});
defineSlots<DropdownMenuContentSlots>();
</script>

<template>
  <DropdownMenuPortal>
    <RekaDropdownMenuContent v-bind="{ ...props, ...$attrs }">
      <slot />
    </RekaDropdownMenuContent>
  </DropdownMenuPortal>
</template>

<style lang="scss" module>
.content {
  border: 1px solid
    var(--bw-dropdown-menu-content-border-color, var(--bw-color-zinc-300));
  border-radius: var(--bw-radius-md);
  color: var(--bw-dropdown-menu-content-color, var(--bw-color-zinc-900));
  background-color: var(
    --bw-dropdown-menu-content-background-color,
    var(--bw-color-white)
  );
  padding: var(--bw-space-2-5) var(--bw-space-3);
  box-shadow: var(--bw-shadow-md);
}
</style>
