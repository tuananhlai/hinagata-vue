import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: "jsdom",
    setupFiles: "./vitest.setup.js",
    coverage: {
      include: ["src/**/*.{ts,tsx,vue}"],
    },
  },
});
