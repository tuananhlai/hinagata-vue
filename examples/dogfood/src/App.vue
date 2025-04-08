<script setup lang="ts">
import {
  Button,
  Checkbox,
  CheckboxGroupField,
  Radio,
  RadioGroup,
  TextField,
  type CheckboxProps,
  type TextFieldExpose,
} from "@tuananhlai/sample-design-system";
import { ref, useTemplateRef } from "vue";

const isChecked = ref<CheckboxProps["modelValue"]>(false);

const textFieldRef = useTemplateRef<TextFieldExpose>("text-field-ref");

const focus = () => {
  textFieldRef.value?.input?.focus();
};
</script>

<template>
  <div :class="$style.root">
    <Button>Click me</Button>
    <Button variant="secondary">Click me</Button>
    <Button variant="tertiary">Click me</Button>
    <Checkbox v-model="isChecked">Check me</Checkbox>
    <TextField ref="text-field-ref" label="Enter your name" />
    <Button @click="focus">Focus</Button>
    <CheckboxGroupField label="Checkboxes">
      <Checkbox value="one">Option 1</Checkbox>
      <Checkbox value="two">Option 2</Checkbox>
      <Checkbox value="three">Option 3</Checkbox>
      <template #description>
        <p :class="$style.description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
      </template>
    </CheckboxGroupField>
    <RadioGroup>
      <Radio value="one">Option 1</Radio>
      <Radio value="two">Option 2</Radio>
      <Radio value="three">Option 3</Radio>
    </RadioGroup>
  </div>
</template>

<style lang="css" module>
.root {
  display: flex;
  gap: var(--bw-space-2);
  align-items: center;
}

.description {
  font-size: var(--bw-font-sm);
  color: var(--bw-color-zinc-500);
  margin-top: var(--bw-space-2);
}
</style>
