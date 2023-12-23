// @ts-check

/* eslint-env node */
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts';
import postcssDts from 'postcss-typescript-d-ts';
import fs from 'fs';
import path from 'path';
import copy from 'rollup-plugin-copy';

const distDir = path.resolve('./dist');

/**
 * Rollup configuration to build the main bundle.
 * @type {import('rollup').RollupOptions}
 */
const mainConfig = {
  input: `src/index.ts`,
  output: [
    {
      file: `dist/index.esm.js`,
      format: 'esm',
      sourcemap: true
    },
    {
      file: `dist/index.js`,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: `dist/index.min.js`,
      format: 'umd',
      name: 'DatePicker',
      plugins: [terser()],
      sourcemap: true,
      globals: {
        react: 'React',
        'date-fns': 'DateFns',
        'date-fns/locale': 'DateFnsLocale'
      }
    }
  ],
  external: ['react', 'date-fns', 'date-fns/locale'],
  plugins: [
    nodeResolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.build.json',
      declaration: false
    }),
    postcss({
      extract: 'style.css',
      sourceMap: true,
      plugins: [
        postcssDts({
          writeFile: ({ content }) => {
            if (!fs.existsSync(distDir)) fs.mkdirSync(distDir);
            fs.writeFileSync(`dist/style.css.d.ts`, content);
          }
        })
      ]
    }),
    // Create module.css
    copy({
      targets: [
        {
          src: './src/style.css',
          dest: './dist',
          rename: 'style.module.css',
          transform: (contents) =>
            contents
              .toString()
              .replace(/\.rdp-/g, '.')
              .replace(/\.rdp/g, '.root')
        },
        {
          src: './src/style.css.d.ts',
          dest: './dist',
          rename: 'style.module.css.d.ts',
          transform: (contents) =>
            contents.toString().replace(/rdp-/g, '').replace(/rdp/g, 'root')
        }
      ]
    })
  ]
};

/**
 * Rollup configuration to build the type declaration file.
 * @type {import('rollup').RollupOptions}
 */
export const dtsConfig = {
  input: `src/index.ts`,
  output: [{ file: `dist/index.d.ts`, format: 'es' }],
  plugins: [
    dts({
      tsconfig: './tsconfig.build.json',
      compilerOptions: {
        preserveSymlinks: false
      }
    })
  ]
};

export default [mainConfig, dtsConfig];
