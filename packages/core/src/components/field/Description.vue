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
import { computed, useId, watch } from "vue";
import { useFieldContext } from "./FieldContext";

const props = defineProps<DescriptionProps>();
defineSlots<DescriptionSlots>();

const generatedID = useId();
const descriptionID = computed(() => props.id ?? generatedID);

const fieldContextValue = useFieldContext();
watch(
  descriptionID,
  (value, _, onCleanup) => {
    if (fieldContextValue == null) return;

    const unregister = fieldContextValue.registerDescription(value);
    onCleanup(() => unregister());
  },
  { immediate: true }
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
