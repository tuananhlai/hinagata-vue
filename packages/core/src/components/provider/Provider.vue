<script lang="ts">
export interface ProviderSlots {
  default(): void;
}
</script>

<script setup lang="ts">
import { TooltipProvider } from "reka-ui";

defineSlots<ProviderSlots>();
</script>

<template>
  <TooltipProvider>
    <slot />
  </TooltipProvider>
</template>
