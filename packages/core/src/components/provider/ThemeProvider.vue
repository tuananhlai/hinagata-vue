<script lang="ts">
export interface ThemeProviderProps {
  defaultTheme: Theme;
}

export interface ThemeProviderSlots {
  default(): void;
}
</script>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import { provideThemeContext, Theme } from "./themeContext";

const props = defineProps<ThemeProviderProps>();
defineSlots<ThemeProviderSlots>();

const theme = ref(props.defaultTheme);

watchEffect(() => {
  document.documentElement.setAttribute("data-theme", theme.value);
});

provideThemeContext({ theme });
</script>

<template>
  <slot />
</template>
