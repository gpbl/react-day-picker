import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@daypicker/hijri": path.resolve(
        __dirname,
        "../packages/hijri/src/index.tsx",
      ),
      "@daypicker/persian": path.resolve(
        __dirname,
        "../packages/persian/src/index.tsx",
      ),
      "react-day-picker/examples": path.resolve(
        __dirname,
        "../examples/index.ts",
      ),
    },
  },
});
