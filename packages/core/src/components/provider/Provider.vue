<script lang="ts">
export interface ProviderProps {}

export interface ProviderSlots {
  default(): void;
}
</script>

<script setup lang="ts">
import { TooltipProvider } from "reka-ui";

defineProps<ProviderProps>();
defineSlots<ProviderSlots>();
</script>

<template>
  <TooltipProvider>
    <slot />
  </TooltipProvider>
</template>
