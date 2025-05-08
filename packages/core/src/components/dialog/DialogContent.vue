<script lang="ts">
export interface DialogContentProps {
  classes?: {
    overlay?: string;
    content?: string;
  };
}

export interface DialogContentSlotsDefaultProps {
  /** Closes the dialog. */
  close: () => void;
}

export interface DialogContentSlots {
  default(props: DialogContentSlotsDefaultProps): void;
}

// There aren't any obvious component that unknown props should be forwarded to, so
// setting `inheritAttrs` to `false` would make the component behavior a bit easier
// to understand.
export default {
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import {
  DialogOverlay,
  DialogPortal,
  injectDialogRootContext,
  DialogContent as RekaDialogContent,
} from "reka-ui";

defineProps<DialogContentProps>();
defineSlots<DialogContentSlots>();

const dialogRootContext = injectDialogRootContext();

const close = () => dialogRootContext.onOpenChange(false);
</script>

<template>
  <DialogPortal>
    <DialogOverlay :class="classes?.overlay" data-testid="overlay" />
    <RekaDialogContent :class="classes?.content">
      <slot :close="close" />
    </RekaDialogContent>
  </DialogPortal>
</template>

<style lang="scss" module></style>
