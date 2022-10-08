import { exec } from 'child_process';

import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-ts';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';
import glob from 'glob';
import path from 'path';

import pkg from './package.json';

/** @type {import('rollup').RollupOptions.globals} */
const globals = {
  react: 'React',
  dateFns: 'date-dns'
};

/** Custom rollup plugin to exec tsc-alias over the built files */
function tscAliasPlugin() {
  return {
    name: 'tsc-alias',
    writeBundle: () => {
      return new Promise((resolve, reject) => {
        exec('tsc-alias', function callback(error, stdout, stderr) {
          if (stderr || error) {
            reject(stderr || error);
          } else {
            resolve(stdout);
          }
        });
      });
    }
  };
}

/**
 * Plugin to watch extra files in rollup.js
 *
 * @param globs string[]
 */
function watcher(globs) {
  /** @type {import('rollup').Plugin} */
  const hook = {
    buildStart() {
      for (const item of globs) {
        glob.sync(path.resolve(item)).forEach((filename) => {
          this.addWatchFile(filename);
        });
      }
    }
  };
  return hook;
}

/** @type {import('rollup').RollupOptions} */
const buildConfig = {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true
    },
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    }
  ],
  plugins: [
    watcher(['./src/style.css']),
    peerDepsExternal(),
    nodeResolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.build.json',
      sourceMap: true
    }),
    tscAliasPlugin(),
    copy({
      targets: [
        {
          src: ['./src/style.css', './src/style.css.d.ts'],
          dest: './dist'
        },
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
            contents
              .toString()
              .replace(/\.rdp-/g, '.')
              .replace(/\.rdp/g, '.root')
        }
      ]
    })
  ]
};

/** @type {import('rollup').RollupOptions} */
const browserConfig = {
  input: 'dist/index.js',
  output: [
    {
      file: pkg.unpkg,
      format: 'umd',
      name: 'DatePicker',
      globals
    }
  ],
  plugins: [terser()]
};

export default [buildConfig, browserConfig];
