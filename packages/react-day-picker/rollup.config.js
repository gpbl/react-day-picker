import copy from "rollup-plugin-copy";
import path from "path";
import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

const input = "./src/index.ts";

export default [
  {
    input,
    output: [
      {
        file: "dist/index.cjs.js",
        format: "cjs",
        sourcemap: true
      },
      {
        file: "dist/index.esm.js",
        format: "esm",
        sourcemap: true
      }
    ],
    external: id => !id.startsWith(".") && !path.isAbsolute(id),
    plugins: [
      nodeResolve(),
      typescript(),
      copy({
        targets: [{ src: ["src/style.css"], dest: ["dist"] }]
      })
    ]
  }
];
