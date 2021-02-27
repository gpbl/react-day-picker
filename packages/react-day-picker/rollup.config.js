import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

export default [
  {
    input: './src/index.ts',
    external: ['react'],
    output: {
      name: 'DayPicker',
      file: 'dist/index.umd.js',
      format: 'umd',
      sourcemap: true,
      globals: { react: 'React' }
    },
    plugins: [resolve(), commonjs(), typescript()]
  },
  {
    input: 'src/index.ts',
    external: ['date-fns', 'react', 'date-fns/locale'],
    plugins: [typescript()],
    output: [
      { file: 'dist/index.cjs.js', format: 'cjs', sourcemap: true },
      { file: 'dist/index.es.js', format: 'es', sourcemap: true }
    ]
  }
];
