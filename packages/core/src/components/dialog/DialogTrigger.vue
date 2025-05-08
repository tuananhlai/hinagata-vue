<script lang="ts">
export interface DialogTriggerSlots {
  /**
   * The trigger element for the dialog.
   *
   * @example
   * <Button>Open Dialog</Button>
   */
  default(): void;
}
</script>

<script lang="ts" setup>
import { DialogTrigger as RekaDialogTrigger } from "reka-ui";

defineSlots<DialogTriggerSlots>();
</script>

<template>
  <RekaDialogTrigger as-child>
    <slot />
  </RekaDialogTrigger>
</template>
