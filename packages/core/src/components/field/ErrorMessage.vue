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
import { useId } from "reka-ui";
import { onMounted, onUnmounted } from "vue";
import { useFieldContext } from "./FieldContext";

const props = defineProps<ErrorMessageProps>();
defineSlots<ErrorMessageSlots>();

const errorMessageID = useId(props.id);
const fieldContextValue = useFieldContext();

onMounted(() =>
  onUnmounted(fieldContextValue?.registerDescription(errorMessageID))
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
