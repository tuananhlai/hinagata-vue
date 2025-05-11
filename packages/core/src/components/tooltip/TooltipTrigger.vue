<script lang="ts">
export interface TooltipTriggerSlots {
  default(): void;
}
</script>

<script lang="ts" setup>
import { TooltipTrigger as RekaTooltipTrigger } from "reka-ui";
</script>

<template>
  <RekaTooltipTrigger as-child>
    <slot />
  </RekaTooltipTrigger>
</template>
