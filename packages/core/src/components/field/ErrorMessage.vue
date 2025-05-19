<script lang="ts">
export interface ErrorMessageProps {
  id?: string;
  /** True to use disabled styles. */
  disabled?: boolean;
}

export interface ErrorMessageSlots {
  default(): void;
}
</script>

<script lang="ts" setup>
import { computed, useId, watch } from "vue";
import { useFieldContext } from "./FieldContext";

const props = defineProps<ErrorMessageProps>();
defineSlots<ErrorMessageSlots>();

const generatedID = useId();
const errorMessageID = computed(() => props.id ?? generatedID);

const fieldContextValue = useFieldContext();

watch(
  errorMessageID,
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
    :id="errorMessageID"
    :class="$style.root"
    :data-disabled="disabled || undefined"
  >
    <slot />
  </div>
</template>

<style lang="scss" module>
.root {
  color: var(--bw-color-red-500);
  font-size: var(--bw-font-sm);

  &:where([data-disabled]) {
    opacity: 0.5;
  }
}
</style>
