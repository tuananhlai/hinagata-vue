import {
    defineConfigWithVueTs,
    vueTsConfigs
} from "@vue/eslint-config-typescript";
import pluginVue from "eslint-plugin-vue";

// files: [
//   "packages/core/src/**/*.{ts,vue}",
//   "examples/dogfood/src/**/*.{ts,vue}",
// ],

export default defineConfigWithVueTs(
  pluginVue.configs["flat/essential"],
  vueTsConfigs.recommended
);
