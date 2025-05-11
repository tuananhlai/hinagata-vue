<script lang="ts">
export interface PopoverTriggerSlots {
  /**
   * The trigger element for the dialog.
   *
   * @example
   * <Button>Open Dialog</Button>
   */
  default(): void;
}

/**
 * Wrap an interactive element so that it opens a popover on click.
 */
export default {};
</script>

<script lang="ts" setup>
import { PopoverTrigger as RekaPopoverTrigger } from "reka-ui";

defineSlots<PopoverTriggerSlots>();
</script>

<template>
  <RekaPopoverTrigger as-child>
    <slot />
  </RekaPopoverTrigger>
</template>
