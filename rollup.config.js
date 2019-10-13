import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import autoExternal from 'rollup-plugin-auto-external';
import copy from 'rollup-plugin-copy';
import replace from 'rollup-plugin-replace';
import { terser } from 'rollup-plugin-terser';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

const globals = {
  react: 'React',
  'date-fns': 'dateFns',
};
const external = Object.keys(globals);
const name = 'ReactDayPicker';
const input = './src/index.ts';
const typescriptPlugin = typescript({
  rollupCommonJSResolveHack: true,
  clean: true,
  verbosity: 2,
});
const replaceProduction = replace({
  'process.env.NODE_ENV': JSON.stringify('production'),
});
const replaceDevelopment = replace({
  'process.env.NODE_ENV': JSON.stringify('development'),
});

export default [
  {
    input,
    output: {
      file: 'lib/index.umd.js',
      format: 'umd',
      name,
      globals,
      sourcemap: true,
    },
    external,
    plugins: [resolve(), typescriptPlugin, replaceDevelopment, sizeSnapshot()],
  },
  {
    input,
    output: {
      file: 'lib/index.umd.min.js',
      format: 'umd',
      name,
      globals,
      sourcemap: true,
    },
    external,
    plugins: [
      resolve(),
      typescriptPlugin,
      replaceProduction,
      terser(),
      sizeSnapshot(),
    ],
  },
  {
    input,
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        exports: 'auto',
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: 'esm',
        exports: 'auto',
        sourcemap: true,
      },
    ],
    external: id =>
      !id.startsWith('\0') && !id.startsWith('.') && !id.startsWith('/'),
    plugins: [
      resolve(),
      typescriptPlugin,
      replaceDevelopment,
      copy({
        targets: [{ src: ['src/style.css'], dest: ['lib'] }],
      }),
      sizeSnapshot(),
    ],
  },
];
