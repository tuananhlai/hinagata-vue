<script lang="ts">
export interface LabelProps {
  id?: string;
  /** True to display a required indicator. */
  required?: boolean;
  /** True to display the disabled variant of the label. */
  disabled?: boolean;
}

export interface LabelSlots {
  default(): void;
}
</script>

<script lang="ts" setup>
import { Label } from "reka-ui";
import { computed, ComputedRef, useId, watch } from "vue";
import { useFieldContext } from "./FieldContext";

const props = defineProps<LabelProps>();
defineSlots<LabelSlots>();

const generatedID = useId();
const labelID = computed(() => props.id ?? generatedID);

const fieldContextValue = useFieldContext();
watch(
  labelID,
  (value, _, onCleanup) => {
    if (fieldContextValue == null) return;

    const unregister = fieldContextValue.registerLabel(value);
    onCleanup(() => unregister());
  },
  { immediate: true }
);

// If a form control is present, we need to associate the label using the `for` attribute,
// otherwise we use a `span` to be more explicit about the semantic meaning of the label.
const componentAs: ComputedRef<"span" | "label"> = computed(() => {
  return fieldContextValue?.formControlID.value != null ? "label" : "span";
});
</script>

<template>
  <Label
    :class="$style.root"
    :as="componentAs"
    :id="labelID"
    :for="fieldContextValue?.formControlID.value"
    :data-required="props.required || undefined"
    :data-disabled="props.disabled || undefined"
  >
    <slot />
    <span v-if="props.required" :class="$style.required"> *</span>
  </Label>
</template>

<style lang="scss" module>
.root {
  font-weight: var(--bw-weight-medium);
  line-height: var(--bw-line-6);

  &:where([data-disabled]) {
    opacity: 0.4;
  }
}

.required {
  color: var(--bw-color-red-500);
}
</style>
