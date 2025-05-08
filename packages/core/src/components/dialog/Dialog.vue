<script lang="ts">
export interface DialogProps
  extends Pick<DialogRootProps, "defaultOpen" | "open"> {}

export interface DialogEmits extends DialogRootEmits {}

export interface DialogSlots {
  default(): void;
}
</script>

<script lang="ts" setup>
import { DialogRoot, DialogRootEmits, DialogRootProps } from "reka-ui";

withDefaults(defineProps<DialogProps>(), {
  // prevent Vue boolean casting behavior.
  open: undefined,
  defaultOpen: undefined,
});
const emits = defineEmits<DialogEmits>();
defineSlots<DialogSlots>();
</script>

<template>
  <DialogRoot
    :default-open="defaultOpen"
    :open="open"
    @update:open="(v) => emits('update:open', v)"
  >
    <slot />
  </DialogRoot>
</template>
