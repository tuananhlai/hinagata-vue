<script lang="ts" setup>
import { DialogClose as RekaDialogClose } from "reka-ui";

const buttonSize = 20;
</script>

<template>
  <RekaDialogClose :class="$style.root">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="buttonSize"
      :height="buttonSize"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  </RekaDialogClose>
</template>

<style lang="scss" module>
.root {
  position: absolute;
  top: var(--bw-space-3);
  right: var(--bw-space-3);
  cursor: pointer;
  color: var(--bw-color-zinc-500);
  background-color: transparent;
  border: none;
  padding: 0;
  display: grid;
  place-content: center;

  &:where(:hover) {
    color: var(--bw-color-zinc-950);
  }

  &:where(:not(:focus-visible)) {
    outline: none;
  }
}
</style>
