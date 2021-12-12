import typescript from 'rollup-plugin-typescript2';
import { replaceTscAliasPaths } from 'tsc-alias';
import nodeResolve from '@rollup/plugin-node-resolve';
/** @type {import('rollup').RollupOptions} */
const config = [
  {
    input: './src/index.ts',
    output: [
      {
        dir: './build',
        format: 'es',
        preserveModules: true,
        sourcemap: true
      }
    ],
    plugins: [
      nodeResolve(),
      typescript({
        tsconfig: './tsconfig.build.json',
        verbosity: 2,
        clean: true
      }),
      {
        writeBundle: () => {
          replaceTscAliasPaths();
        }
      }
    ],
    external: ['react', 'date-fns', 'date-fns/locale/en-US']
  },
  {
    input: './build/index.js',
    output: [
      {
        file: './dist/main.js',
        format: 'commonjs',
        sourcemap: true
      }
    ],
    external: ['react', 'date-fns', 'date-fns/locale/en-US', '@reach/auto-id']
  }
];

export default config;
