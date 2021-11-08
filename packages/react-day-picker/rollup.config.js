import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

/** @type {import('rollup').RollupOptions} */
const config = [
  {
    input: './src/main.ts',
    output: [
      {
        dir: './build',
        format: 'es',
        preserveModules: true,
        sourcemap: true
      }
    ],
    plugins: [typescript()],
    external: ['react', 'date-fns', 'date-fns/locale/en-US']
  },
  {
    input: './build/main.js',
    output: [
      {
        file: './dist/main.js',
        format: 'commonjs',
        sourcemap: true
      }
    ],
    external: ['react', 'date-fns', 'date-fns/locale/en-US']
  }
];

export default config;
