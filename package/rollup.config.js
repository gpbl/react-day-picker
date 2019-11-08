import { sizeSnapshot } from "rollup-plugin-size-snapshot";
import copy from "rollup-plugin-copy";
import resolve from "rollup-plugin-node-resolve";
import replace from "rollup-plugin-replace";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";
import path from "path";
import pkg from "./package.json";
import alias from "@rollup/plugin-alias";

const name = "ReactDayPicker";
const input = "./src/index.ts";
const globals = { react: "React" };
const external = Object.keys(globals);

const typescriptPlugin = typescript({
  rollupCommonJSResolveHack: true,
  clean: true,
  verbosity: 2
});
const replaceProduction = replace({
  "process.env.NODE_ENV": JSON.stringify("production")
});

const aliasPlugin = alias({
  entries: {
    components: "src/components",
    hooks: "src/hooks",
    classes: "src/classes"
  }
});

export default [
  {
    input,
    output: {
      file: "lib/index.umd.js",
      format: "umd",
      name,
      globals,
      sourcemap: true
    },
    external,
    plugins: [resolve(), typescriptPlugin, aliasPlugin]
  },
  {
    input,
    output: {
      file: "lib/index.umd.min.js",
      format: "umd",
      name,
      globals,
      sourcemap: true
    },
    external,
    plugins: [
      resolve(),
      typescriptPlugin,
      aliasPlugin,
      replaceProduction,
      terser(),
      sizeSnapshot()
    ]
  },
  {
    input,
    output: [
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: true
      },
      {
        file: pkg.module,
        format: "esm",
        sourcemap: true
      }
    ],
    external: id => !id.startsWith(".") && !path.isAbsolute(id),
    plugins: [
      resolve(),
      aliasPlugin,
      typescriptPlugin,
      copy({
        targets: [{ src: ["src/style.css"], dest: ["lib"] }]
      })
    ]
  }
];
