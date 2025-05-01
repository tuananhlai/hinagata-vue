<script lang="ts">
export interface VisualTestGridProps {
  /** @default 200 */
  cellWidth?: number;
}

export interface VisualTestGridSlots {
  default(): void;
}
</script>

<script lang="ts" setup>
defineProps<VisualTestGridProps>();
defineSlots<VisualTestGridSlots>();
</script>

<template>
  <div
    :style="{
      display: 'grid',
      gridTemplateColumns: `repeat(auto-fill, minmax(${cellWidth}px, 1fr))`,
      gap: '24px',
      alignItems: 'center',
      justifyItems: 'center',
    }"
  >
    <slot />
  </div>
</template>
