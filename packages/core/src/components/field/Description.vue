<script lang="ts">
export interface DescriptionProps {
  id?: string;
}

export interface DescriptionSlots {
  default(): void;
}
</script>

<script lang="ts" setup>
import { useId } from "reka-ui";
import { onMounted, onUnmounted } from "vue";
import { useFieldContext } from "./FieldContext";

const props = defineProps<DescriptionProps>();
defineSlots<DescriptionSlots>();

const descriptionID = useId(props.id);
const fieldContextValue = useFieldContext();
onMounted(() =>
  onUnmounted(fieldContextValue?.registerDescription(descriptionID)),
);
</script>

<template>
  <div :id="descriptionID" :class="$style.root">
    <slot />
  </div>
</template>

<style lang="scss" module>
.root {
  color: var(--bw-color-zinc-700);
}
</style>
