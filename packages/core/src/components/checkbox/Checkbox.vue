<script lang="ts">
export interface CheckboxProps extends CheckboxRootProps {}

export interface CheckboxEmits extends CheckboxRootEmits {}

export interface CheckboxSlots {
  default(): void;
}
</script>

<script setup lang="ts">
import {
  CheckboxIndicator,
  CheckboxRoot,
  CheckboxRootEmits,
  CheckboxRootProps,
  Label,
  useForwardPropsEmits,
} from "reka-ui";

const props = defineProps<CheckboxProps>();
const emits = defineEmits<CheckboxEmits>();
defineSlots<CheckboxSlots>();

const forwardedPropEmits = useForwardPropsEmits(props, emits);
</script>

<template>
  <Label :class="$style.root" :data-disabled="disabled || undefined">
    <CheckboxRoot :class="$style.checkboxRoot" v-bind="forwardedPropEmits">
      <CheckboxIndicator :class="$style.checkboxIndicator">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          :class="$style.checkedIcon"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </CheckboxIndicator>
    </CheckboxRoot>
    <slot />
  </Label>
</template>

<style lang="scss" module>
.root {
  display: flex;
  align-items: center;
  gap: var(--bw-space-2);

  &:where(:hover:not([data-disabled])) {
    cursor: pointer;
  }
}

.checkboxRoot {
  flex-shrink: 0;
  width: var(--bw-space-5);
  height: var(--bw-space-5);
  display: flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  background-color: var(--bw-checkbox-background-color);
  border: 1px solid var(--bw-color-zinc-300);
  border-radius: var(--bw-space-1);
  padding: 0;

  &:where(:hover) {
    background-color: var(--bw-color-zinc-50);
  }

  &:where([data-state="checked"]) {
    background-color: var(--bw-checkbox-checked-background-color);
  }
}

.checkboxIndicator {
  display: flex;
  align-items: center;
  justify-content: center;
}

.checkedIcon {
  width: var(--bw-space-4);
  height: var(--bw-space-4);
  stroke-width: 4px;
  color: var(--bw-color-white);
}
</style>
