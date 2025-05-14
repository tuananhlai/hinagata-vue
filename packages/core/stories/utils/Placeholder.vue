<script lang="ts">
export interface PlaceholderProps {
  /** @default '100%' */
  width: CSSProperties["width"];
  /** @default '200px' */
  height: CSSProperties["height"];
}
</script>

<script lang="ts" setup>
import { CSSProperties } from "vue";

withDefaults(defineProps<PlaceholderProps>(), {
  width: "100%",
  height: "200px",
});
</script>

<template>
  <div :style="{ width, height }" :class="$style.root">Placeholder</div>
</template>

<style lang="scss" module>
.root {
  display: grid;
  place-content: center;

  font-family: monospace;
  color: var(--bw-color-zinc-500);
  border: 1px dashed var(--bw-color-zinc-500);
  border-radius: var(--bw-radius-lg);
  background-color: var(--bw-color-zinc-50);
}
</style>
