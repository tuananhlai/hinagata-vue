<script lang="ts">
export interface RadioProps
  extends Omit<RadioGroupItemProps, "name" | "required"> {}

export interface RadioEmits {
  select: [e: RadioGroupItemSelectEvent];
}

export interface RadioSlots {
  default(): void;
}
</script>

<script setup lang="ts">
import {
  Label,
  RadioGroupItem,
  RadioGroupItemProps,
  RadioGroupItemSelectEvent,
} from "reka-ui";

const props = defineProps<RadioProps>();
const emits = defineEmits<RadioEmits>();
defineSlots<RadioSlots>();
</script>

<template>
  <Label :class="$style.root">
    <RadioGroupItem
      :class="$style.radioGroupItem"
      @select="emits('select', $event)"
      v-slot="{ checked }"
      v-bind="props"
    >
      <svg
        v-if="checked"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        fill="currentColor"
        :class="$style.checkedIcon"
      >
        <path
          d="M480-280q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm0 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
        />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        fill="currentColor"
      >
        <path
          d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
        />
      </svg>
    </RadioGroupItem>
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

.radioGroupItem {
  flex-shrink: 0;
  width: var(--bw-space-5);
  height: var(--bw-space-5);
  display: flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  background-color: transparent;
  padding: 0;
  border: none;

  &:where(:hover) {
    background-color: var(--bw-color-zinc-50);
  }
}

.radioGroupIndicator {
  display: flex;
  align-items: center;
  justify-content: center;
}

.checkedIcon {
  fill: var(--bw-radio-checked-background-color);
}
</style>
