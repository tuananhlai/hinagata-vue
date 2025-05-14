<script lang="ts">
export interface DescriptionProps {
  id?: string;
  /** True to use disabled styles. */
  disabled?: boolean;
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
  onUnmounted(fieldContextValue?.registerDescription(descriptionID))
);
</script>

<template>
  <div
    :id="descriptionID"
    :class="$style.root"
    :data-disabled="disabled || undefined"
  >
    <slot />
  </div>
</template>

<style lang="scss" module>
.root {
  color: var(--bw-color-zinc-500);
  font-size: var(--bw-font-sm);
  line-height: var(--bw-line-5);

  &:where([data-disabled]) {
    opacity: 0.5;
  }
}
</style>
