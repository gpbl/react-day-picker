import fs from 'fs';
import postcssDts from 'postcss-typescript-d-ts';
import copy from 'rollup-plugin-copy';
import { dts } from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';

// @ts-check
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';

import pkg from './package.json' assert { type: 'json' };

const globals = {
  react: 'React',
  'date-fns': 'dateFns',
  'date-fns/locale': 'Locale'
};

/**
 * Rollup configuration to build the main bundles.
 * @type {import('rollup').RollupOptions}
 */
const mainConfig = {
  input: pkg.source,
  output: [
    {
      file: pkg.browser,
      format: 'umd',
      name: 'DatePicker',
      plugins: [terser()],
      globals,
      sourcemap: true
    },
    {
      file: pkg.main,
      format: 'cjs',
      name: 'DatePicker',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    resolve(),
    typescript({ tsconfig: './tsconfig.build.json' }),
    babel({
      babelHelpers: 'external',
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react', '@babel/preset-env']
    }),
    commonjs(),
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  external: ['react', /date-fns/]
};

/**
 * Rollup configuration to build the type declaration file.
 * @type {import('rollup').RollupOptions}
 */
const dtsConfig = {
  input: pkg.source,
  output: {
    file: pkg.types,
    format: 'es',
    sourcemap: true
  },
  plugins: [dts({ tsconfig: './tsconfig.build.json' })]
};

/**
 * Rollup configuration to build the type declaration file.
 * @type {import('rollup').RollupOptions}
 */
const cssConfig = {
  input: `src/style.css`,
  output: {
    file: 'dist/style.css.js',
    format: 'es',
    plugins: [terser()]
  },
  plugins: [
    postcss({
      sourceMap: true,
      plugins: [
        postcssDts({
          writeFile: ({ content }) => {
            fs.writeFileSync(`dist/style.css.d.ts`, content);
          }
        })
      ]
    }),
    copy({
      targets: [
        {
          src: 'src/style.css',
          dest: './dist',
          transform: (contents) => contents.toString()
        },
        {
          src: 'src/style.css',
          dest: './dist',
          rename: 'style.module.css',
          transform: (contents) => contents.toString().replace(/\.rdp-/g, '.')
        },
        {
          src: './dist/style.css.d.ts',
          dest: './dist',
          rename: 'style.module.css.d.ts',
          transform: (contents) =>
            contents.toString().replace(/rdp-/g, '').replace(/rdp/g, 'root')
        },
        {
          src: './dist/style.css.d.ts',
          dest: './dist',
          rename: 'style.module.css.d.ts',
          transform: (contents) =>
            contents.toString().replace(/rdp-/g, '').replace(/rdp/g, 'root')
        }
      ]
    })
  ]
};

export default [mainConfig, dtsConfig, cssConfig];
