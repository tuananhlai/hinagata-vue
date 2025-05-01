import { inject, provide, Ref } from "vue";

const contextKey = Symbol("themeContext");

export type Theme = "pink" | "fuschia";

export type ThemeContextValue = {
  theme: Ref<Theme>;
};

export const provideThemeContext = (value: ThemeContextValue) => {
  provide(contextKey, value);
};

export const useThemeContext = (): ThemeContextValue => {
  const val = inject<ThemeContextValue>(contextKey);
  if (val == null) {
    throw new Error(
      "useThemeContext must be called within a component wrapped by provideThemeContext"
    );
  }

  return val;
};
