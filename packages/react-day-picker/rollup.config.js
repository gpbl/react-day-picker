import typescript from 'rollup-plugin-typescript2';
import nodeResolve from 'rollup-plugin-node-resolve';

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
      typescript({
        tsconfig: './tsconfig.build.json'
      }),
      nodeResolve()
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
    external: ['react', 'date-fns', 'date-fns/locale/en-US']
  }
];

export default config;
