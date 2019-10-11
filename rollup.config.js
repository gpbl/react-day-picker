import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import { terser } from 'rollup-plugin-terser';
import autoExternal from 'rollup-plugin-auto-external';
import commonjs from 'rollup-plugin-commonjs';
import copy from 'rollup-plugin-copy';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import stripPropTypes from 'rollup-plugin-strip-prop-types';
import typescript from 'rollup-plugin-typescript';

import pkg from './package.json';

const input = 'src/index.ts';
const onwarn = warning => {
  throw Error(warning.message);
};

const sharedPlugins = [
  replace({
    'process.env.NODE_ENV': JSON.stringify('development'),
  }),
  typescript(),
  resolve(),
  commonjs(),
  autoExternal(),
  copy({
    targets: [{ src: 'src/style.css', dest: 'lib' }],
  }),
];

export default [
  // {
  //   input,
  //   onwarn,
  //   output: {
  //     name: 'DayPicker',
  //     file: pkg.browser,
  //     format: 'umd',
  //     sourcemap: true,
  //     globals: { react: 'React', 'date-fns': 'dateFns' },
  //   },
  //   plugins: [...sharedPlugins, terser(), sizeSnapshot(), stripPropTypes()],
  // },
  {
    input,
    onwarn,
    output: [
      // { file: pkg.main, format: 'cjs', sourcemap: true },
      { file: pkg.main, format: 'es', sourcemap: true },
    ],
    plugins: sharedPlugins,
  },
];
