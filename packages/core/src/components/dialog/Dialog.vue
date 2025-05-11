<script lang="ts">
export interface DialogProps
  extends Pick<DialogRootProps, "defaultOpen" | "open"> {}

export interface DialogEmits extends DialogRootEmits {}

export interface DialogSlots {
  default(): void;
}

/**
 * An overlay shown above other content in an application.
 *
 * @example
 * <Dialog>
 *   <DialogTrigger>
 *     <Button>Open</Button>
 *   </DialogTrigger>
 *   <DialogContent>
 *     <DialogTitle>Dialog Title</DialogTitle>
 *     <DialogBody>
 *       <p>Dialog content</p>
 *     </DialogBody>
 *     <DialogActions>
 *       <Button>Action</Button>
 *     </DialogActions>
 *   </DialogContent>
 * </Dialog>
 */
export default {};
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
