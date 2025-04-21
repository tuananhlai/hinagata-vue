import {
  defineConfigWithVueTs,
  vueTsConfigs,
} from "@vue/eslint-config-typescript";
import pluginVue from "eslint-plugin-vue";

// files: [
//   "packages/core/src/**/*.{ts,vue}",
//   "examples/dogfood/src/**/*.{ts,vue}",
// ],
export default defineConfigWithVueTs(
  pluginVue.configs["flat/essential"],
  vueTsConfigs.recommended,
  {
    rules: {
      "@typescript-eslint/no-empty-object-type": "off",
      "vue/multi-word-component-names": "off",
    },
  }
);
