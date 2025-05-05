<script lang="ts">
export interface DropdownMenuTriggerSlots {
  default(): void;
}
</script>

<script lang="ts" setup>
import { DropdownMenuTrigger as RekaDropdownMenuTrigger } from "reka-ui";

defineSlots<DropdownMenuTriggerSlots>();
</script>

<template>
  <RekaDropdownMenuTrigger as-child>
    <slot />
  </RekaDropdownMenuTrigger>
</template>
