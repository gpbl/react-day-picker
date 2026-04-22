import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "react-day-picker/examples",
        replacement: path.resolve(__dirname, "../examples/index.ts"),
      },
      {
        find: "react-day-picker/style.css",
        replacement: path.resolve(
          __dirname,
          "../packages/react-day-picker/src/style.css",
        ),
      },
      {
        find: "react-day-picker/style.module.css",
        replacement: path.resolve(
          __dirname,
          "../packages/react-day-picker/src/style.module.css",
        ),
      },
      {
        find: /^react-day-picker\/locale\/(.+)$/,
        replacement: path.resolve(
          __dirname,
          "../packages/react-day-picker/src/locale/$1.ts",
        ),
      },
      {
        find: /^react-day-picker\/locale$/,
        replacement: path.resolve(
          __dirname,
          "../packages/react-day-picker/src/locale.ts",
        ),
      },
      {
        find: /^react-day-picker$/,
        replacement: path.resolve(
          __dirname,
          "../packages/react-day-picker/src/index.ts",
        ),
      },
      {
        find: "@daypicker/buddhist",
        replacement: path.resolve(
          __dirname,
          "../packages/buddhist/src/index.tsx",
        ),
      },
      {
        find: "@daypicker/ethiopic",
        replacement: path.resolve(
          __dirname,
          "../packages/ethiopic/src/index.tsx",
        ),
      },
      {
        find: "@daypicker/hebrew",
        replacement: path.resolve(
          __dirname,
          "../packages/hebrew/src/index.tsx",
        ),
      },
      {
        find: "@daypicker/hijri",
        replacement: path.resolve(__dirname, "../packages/hijri/src/index.tsx"),
      },
      {
        find: "@daypicker/persian",
        replacement: path.resolve(
          __dirname,
          "../packages/persian/src/index.tsx",
        ),
      },
    ],
  },
});
