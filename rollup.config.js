import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import autoExternal from 'rollup-plugin-auto-external';
import copy from 'rollup-plugin-copy';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

export default {
  input: './src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'auto',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'auto',
      sourcemap: true,
    },
  ],
  plugins: [
    autoExternal(),
    resolve(),
    typescript({
      rollupCommonJSResolveHack: true,
      clean: true,
      verbosity: 2,
    }),
    copy({
      targets: [{ src: ['src/style.css', 'src/types.d.ts'], dest: 'lib' }],
    }),
    sizeSnapshot(),
  ],
};
