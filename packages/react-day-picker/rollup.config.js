import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';

export default [
  {
    input: './src/index.ts',
    external: ['date-fns', 'react', 'date-fns/locale'],
    output: {
      name: 'DayPicker',
      file: pkg.browser,
      format: 'umd',
      sourcemap: true,
      globals: { react: 'React', 'date-fns': 'DateFns' }
    },
    plugins: [
      resolve(),
      commonjs({
        include: '../../node_modules/**'
      }),
      typescript()
    ]
  },
  {
    input: 'src/index.ts',
    external: ['date-fns', 'react', 'date-fns/locale'],
    plugins: [typescript()],
    output: [
      { file: pkg.main, format: 'cjs', sourcemap: true },
      { file: pkg.module, format: 'es', sourcemap: true }
    ]
  }
];
