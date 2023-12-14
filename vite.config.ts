/// <reference types="vitest" />

import viteTsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
/** @type {import('vitest').UserConfig} */
export default defineConfig({
  plugins: [react(), viteTsconfigPaths()],
  appType: "spa",
  test: {
    coverage: {
      provider: "v8",
    },
    setupFiles: "vitest-setup.ts",
    environment: "jsdom",
    include: ["**/*.test.{js,ts,tsx,jsx}"],
  },
});
