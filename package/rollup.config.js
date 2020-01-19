import copy from "rollup-plugin-copy";
import path from "path";
import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

import { terser } from "rollup-plugin-terser";

import pkg from "./package.json";

const name = "ReactDayPicker";
const input = "./src/index.ts";
const globals = { react: "React" };
const external = Object.keys(globals);

export default [
  {
    input,
    output: {
      file: "lib/index.min.js",
      format: "umd",
      name,
      globals,
      sourcemap: true
    },
    external,
    plugins: [nodeResolve(), typescript(), terser()]
  },
  {
    input,
    output: [
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: true
      }
    ],
    external: id => !id.startsWith(".") && !path.isAbsolute(id),
    plugins: [
      nodeResolve(),
      typescript(),
      copy({
        targets: [{ src: ["src/style.css"], dest: ["lib"] }]
      })
    ]
  }
];
