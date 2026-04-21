import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "react-day-picker/examples": path.resolve(
        __dirname,
        "../examples/index.ts",
      ),
    },
  },
});
