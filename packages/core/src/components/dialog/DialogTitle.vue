<script lang="ts">
export interface DialogTitleSlots {
  default(): void;
}
</script>

<script lang="ts" setup>
import { DialogTitle } from "reka-ui";

defineSlots<DialogTitleSlots>();
</script>

<template>
  <DialogTitle>
    <slot />
  </DialogTitle>
</template>

<style lang="scss" module></style>
