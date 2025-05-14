<script lang="ts">
export interface TextFieldProps extends FieldComponentProps, TextInputProps {}

export interface TextFieldEmits extends TextInputEmits {}

export interface TextFieldSlots extends FieldComponentSlots {}

export interface TextFieldExpose {
  input: HTMLInputElement | null;
}
</script>

<script setup lang="ts">
import {
  FieldComponentProps,
  FieldComponentSlots,
} from "@/utils/FieldComponent";
import { useForwardPropsEmits } from "reka-ui";
import { computed, useTemplateRef } from "vue";
import { Description, ErrorMessage, Field, Label } from "../field";
import TextInput, {
  TextInputEmits,
  TextInputExpose,
  TextInputProps,
} from "./TextInput.vue";

const props = defineProps<TextFieldProps>();
const emits = defineEmits<TextFieldEmits>();
const slots = defineSlots<TextFieldSlots>();

const textInputRef = useTemplateRef<TextInputExpose>("text-input-ref");

const textInputProps = computed<TextInputProps>(() => {
  const { label, description, errorMessage, ...rest } = props;
  return rest;
});
const forwarded = useForwardPropsEmits(textInputProps, emits);

defineExpose<TextFieldExpose>({
  get input() {
    return textInputRef.value?.domNode ?? null;
  },
});
</script>

<template>
  <Field :class="$style.root">
    <Label
      v-if="slots.label || props.label"
      :required="required"
      :disabled="disabled"
    >
      <slot name="label">
        {{ props.label }}
      </slot>
    </Label>
    <Description v-if="slots.description || props.description">
      <slot name="description">
        {{ props.description }}
      </slot>
    </Description>
    <TextInput :class="$style.input" ref="text-input-ref" v-bind="forwarded" />
    <ErrorMessage
      v-if="slots.errorMessage || props.errorMessage"
      :class="$style.errorMessage"
      :disabled="disabled"
    >
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

.input {
  margin-top: var(--bw-space-2);
}

.errorMessage {
  margin-top: var(--bw-space-2);
}
</style>
