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
withDefaults(defineProps<VisualTestGridProps>(), {
  cellWidth: 200,
});
defineSlots<VisualTestGridSlots>();
</script>

<template>
  <div
    :style="{
      display: 'grid',
      gridTemplateColumns: `repeat(auto-fill, minmax(${cellWidth}px, 1fr))`,
      gap: '24px',
      alignItems: 'center',
      justifyItems: 'start',
    }"
  >
    <slot />
  </div>
</template>
