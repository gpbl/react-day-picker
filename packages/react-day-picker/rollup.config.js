import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default {
  input: './src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [typescript()],
  external: ['react', 'date-fns', 'date-fns/locale/en-US']
};
