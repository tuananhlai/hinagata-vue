<script lang="ts">
export interface DialogBodySlots {
  default(): void;
}
</script>

<script lang="ts" setup>
defineSlots<DialogBodySlots>();
</script>

<template>
  <div :class="$style.root">
    <slot />
  </div>
</template>

<style lang="scss" module>
.root {
  overflow-y: auto;

  &:where(:not(:first-child)) {
    margin-top: var(--bw-space-6);
  }
}
</style>
