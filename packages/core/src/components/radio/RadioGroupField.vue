<script lang="ts">
export interface RadioGroupFieldProps
  extends FieldComponentProps,
    RadioGroupProps {}

export interface RadioGroupFieldEmits extends RadioGroupEmits {}

export interface RadioGroupFieldSlots extends FieldComponentSlots {
  default(): void;
}
</script>

<script lang="ts" setup>
import {
  FieldComponentProps,
  FieldComponentSlots,
} from "@/utils/FieldComponent";
import { useForwardPropsEmits } from "reka-ui";
import { computed } from "vue";
import { Description, ErrorMessage, Field, Label } from "../field";
import RadioGroup, { RadioGroupEmits, RadioGroupProps } from "./RadioGroup.vue";

const props = defineProps<RadioGroupFieldProps>();
const emits = defineEmits<RadioGroupFieldEmits>();
const slots = defineSlots<RadioGroupFieldSlots>();

const radioGroupProps = computed<RadioGroupProps>(() => {
  const { label, description, errorMessage, ...rest } = props;
  return rest;
});
const radioGroupForwarded = useForwardPropsEmits(radioGroupProps, emits);
</script>

<template>
  <Field :class="$style.root">
    <Label v-if="slots.label || props.label">
      <slot name="label">
        {{ props.label }}
      </slot>
    </Label>
    <RadioGroup v-bind="radioGroupForwarded">
      <slot />
    </RadioGroup>
    <Description v-if="slots.description || props.description">
      <slot name="description">
        {{ props.description }}
      </slot>
    </Description>
    <ErrorMessage v-if="slots.errorMessage || props.errorMessage">
      <slot name="errorMessage">
        {{ props.errorMessage }}
      </slot>
    </ErrorMessage>
  </Field>
</template>

<style lang="scss" module>
.root {
  display: flex;
  flex-direction: column;
}
</style>
