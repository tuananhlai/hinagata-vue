<script lang="ts">
export interface DialogActionsSlots {
  default(): void;
}
</script>

<script lang="ts" setup>
defineSlots<DialogActionsSlots>();
</script>

<template>
  <div :class="$style.root">
    <slot />
  </div>
</template>

<style lang="scss" module>
.root {
  display: flex;
  justify-content: flex-end;
  gap: var(--bw-space-2);

  &:where(:not(:first-child)) {
    margin-top: var(--bw-space-6);
  }
}
</style>
