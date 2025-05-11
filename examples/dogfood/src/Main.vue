<script lang="ts" setup>
import {
  Button,
  Checkbox,
  CheckboxGroupField,
  Dialog,
  DialogContent,
  DialogTrigger,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Radio,
  RadioGroup,
  TextField,
  useTheme,
  type CheckboxProps,
  type TextFieldExpose,
} from "@tuananhlai/sample-design-system";
import { ref, useTemplateRef } from "vue";

const isChecked = ref<CheckboxProps["modelValue"]>(false);

const textFieldRef = useTemplateRef<TextFieldExpose>("text-field-ref");

const focus = () => {
  textFieldRef.value?.input?.focus();
};

const { theme } = useTheme();

const switchTheme = () => {
  theme.value = theme.value === "pink" ? "fuschia" : "pink";
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
    <Popover>
      <PopoverTrigger>
        <Button>Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <p>Popover content</p>
      </PopoverContent>
    </Popover>
    <Button @click="switchTheme">Switch theme</Button>
    <Dialog>
      <DialogTrigger>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <p>Dialog content</p>
      </DialogContent>
    </Dialog>
  </div>
</template>

<style lang="scss" module>
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
