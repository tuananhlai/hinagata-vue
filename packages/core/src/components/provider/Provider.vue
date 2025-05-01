<script lang="ts">
export interface ProviderProps {
  /**
   * The default color theme of the application.
   * @default 'pink'
   */
  defaultTheme?: Theme;
}

export interface ProviderSlots {
  default(): void;
}
</script>

<script setup lang="ts">
import { TooltipProvider } from "reka-ui";
import ThemeProvider from "./ThemeProvider.vue";
import { Theme } from "./themeContext";

withDefaults(defineProps<ProviderProps>(), {
  defaultTheme: "pink",
});
defineSlots<ProviderSlots>();
</script>

<template>
  <ThemeProvider :default-theme="defaultTheme">
    <TooltipProvider>
      <slot />
    </TooltipProvider>
  </ThemeProvider>
</template>
