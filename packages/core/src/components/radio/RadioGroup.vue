<script lang="ts">
export interface RadioGroupProps
  extends RadioGroupRootProps,
    AriaLabellingProps {
  /** A unique identifier for the element. */
  id?: string;
  /** Whether the input value is invalid. */
  invalid?: boolean;
  /** Identifies the element that provides an error message for the object. */
  ariaErrormessage?: string;
}

export interface RadioGroupEmits extends RadioGroupRootEmits {}

export interface RadioGroupSlots {
  default(): void;
}
</script>

<script lang="ts" setup>
import { AriaLabellingProps } from "@/utils/AriaLabellingProps";
import clsx from "clsx";
import {
  RadioGroupRoot,
  RadioGroupRootEmits,
  RadioGroupRootProps,
  useForwardPropsEmits,
} from "reka-ui";
import { useFieldContext } from "../field/FieldContext";

const props = defineProps<RadioGroupProps>();
const emits = defineEmits<RadioGroupEmits>();
const slots = defineSlots<RadioGroupSlots>();

const forwardedPropEmits = useForwardPropsEmits(props, emits);

const fieldContextValue = useFieldContext();
</script>

<template>
  <RadioGroupRoot
    :class="$style.root"
    :data-orientation="orientation"
    v-bind="forwardedPropEmits"
    :data-invalid="invalid || undefined"
    :aria-invalid="invalid"
    :aria-label="props.ariaLabel"
    :aria-labelledby="
      clsx(props.ariaLabelledby, fieldContextValue?.labelledBy.value) ||
      undefined
    "
    :aria-describedby="
      clsx(props.ariaDescribedby, fieldContextValue?.describedBy.value) ||
      undefined
    "
    :aria-details="props.ariaDetails"
    :aria-errormessage="props.ariaErrormessage"
  >
    <slot />
  </RadioGroupRoot>
</template>

<style lang="scss" module>
.root {
  display: flex;
  flex-direction: column;
  gap: var(--bw-space-2);

  &:where([data-orientation="horizontal"]) {
    flex-direction: row;
    gap: var(--bw-space-4);
  }
}
</style>
