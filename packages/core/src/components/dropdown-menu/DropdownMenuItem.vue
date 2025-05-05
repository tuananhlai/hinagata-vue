<script lang="ts">
export interface DropdownMenuItemProps extends RekaDropdownMenuItemProps {}

export interface DropdownMenuItemEmits extends RekaDropdownMenuItemEmits {}

export interface DropdownMenuItemSlots {
  default(): void;
}
</script>

<script lang="ts" setup>
import {
  DropdownMenuItem as RekaDropdownMenuItem,
  DropdownMenuItemProps as RekaDropdownMenuItemProps,
  DropdownMenuItemEmits as RekaDropdownMenuItemEmits,
  useForwardPropsEmits,
} from "reka-ui";

const props = defineProps<DropdownMenuItemProps>();
const emits = defineEmits<DropdownMenuItemEmits>();
defineSlots<DropdownMenuItemSlots>();

const forwardedPropEmits = useForwardPropsEmits(props, emits);
</script>

<template>
  <RekaDropdownMenuItem v-bind="forwardedPropEmits">
    <slot />
  </RekaDropdownMenuItem>
</template>

<style lang="scss" module></style>
