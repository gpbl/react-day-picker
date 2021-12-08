import typescript from 'rollup-plugin-typescript2';

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
      })
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
