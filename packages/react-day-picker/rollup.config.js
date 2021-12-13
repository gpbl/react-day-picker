import typescript from 'rollup-plugin-typescript2';
import { replaceTscAliasPaths } from 'tsc-alias';
import nodeResolve from '@rollup/plugin-node-resolve';
/** @type {import('rollup').RollupOptions} */
const config = [
  {
    input: './src/index.ts',
    output: [
      {
        dir: './dist',
        format: 'commonjs',
        sourcemap: true
      }
    ],
    plugins: [
      nodeResolve(),
      typescript({
        tsconfig: './tsconfig.build.json',
        verbosity: 2
      }),
      {
        writeBundle: () => {
          replaceTscAliasPaths({
            configFile: './tsconfig.build.json',
            outDir: './dist'
          });
        }
      }
    ],
    external: ['react', 'date-fns', 'date-fns/locale/en-US']
  }
];

export default config;
