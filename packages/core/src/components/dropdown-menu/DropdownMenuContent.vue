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
  collisionPadding: 8,
  avoidCollisions: true,
});
defineSlots<DropdownMenuContentSlots>();
</script>

<template>
  <DropdownMenuPortal>
    <RekaDropdownMenuContent
      :class="$style.content"
      v-bind="{ ...props, ...$attrs }"
    >
      <slot />
    </RekaDropdownMenuContent>
  </DropdownMenuPortal>
</template>

<style lang="scss" module>
.content {
  border: 1px solid
    var(--bw-dropdown-menu-content-border-color, var(--bw-color-zinc-300));
  border-radius: var(--bw-radius-lg);
  color: var(--bw-dropdown-menu-content-color, var(--bw-color-zinc-900));
  background-color: var(
    --bw-dropdown-menu-content-background-color,
    var(--bw-color-white)
  );
  padding: 0;
  box-shadow: var(--bw-shadow-md);
  overflow: hidden;
  min-width: var(--bw-space-56);
  max-height: var(--reka-dropdown-menu-content-available-height);
  overflow-y: auto;
}
</style>
