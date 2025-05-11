<script lang="ts">
export interface DialogContentProps {
  /** The class names to be passed to underlying components. */
  classes?: {
    /** The layer which covers the entire screen when the dialog is open. */
    overlay?: string;
    /** The open dialog. */
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
    <DialogOverlay
      :class="[$style.overlay, classes?.overlay]"
      data-testid="overlay"
    >
      <RekaDialogContent :class="[$style.content, classes?.content]">
        <slot :close="close" />
      </RekaDialogContent>
    </DialogOverlay>
  </DialogPortal>
</template>

<style lang="scss" module>
@use "../../styles/utils" as *;

.overlay {
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: var(--bw-space-2);
  background-color: alpha(var(--bw-color-zinc-950), 25);
  backdrop-filter: var(--bw-blur-md);
}

.content {
  width: 100%;
  position: relative;

  background-color: var(--bw-color-white);
  border-radius: var(--bw-radius-2xl);
  padding: var(--bw-space-8);

  &:where(:not(:focus-visible)) {
    outline: none;
  }

  @include screen-sm {
    max-width: 32rem;
  }
}
</style>
