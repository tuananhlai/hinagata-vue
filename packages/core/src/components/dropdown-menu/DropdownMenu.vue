<script lang="ts">
export interface DropdownMenuProps extends RekaDropdownMenuProps {}

export interface DropdownMenuEmits extends RekaDropdownMenuEmits {}

export interface DropdownMenuSlots {
  default(): void;
}
</script>

<script lang="ts" setup>
import {
  DropdownMenuRoot,
  DropdownMenuRootProps as RekaDropdownMenuProps,
  DropdownMenuRootEmits as RekaDropdownMenuEmits,
  useForwardPropsEmits,
} from "reka-ui";

const props = defineProps<DropdownMenuProps>();
const emits = defineEmits<DropdownMenuEmits>();
defineSlots<DropdownMenuSlots>();

const forwardedPropEmits = useForwardPropsEmits(props, emits);
</script>

<template>
  <DropdownMenuRoot v-bind="forwardedPropEmits">
    <slot />
  </DropdownMenuRoot>
</template>
