import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';

const input = './src/index.js';

const getBabelOptions = () => ({
  plugins: [
    'external-helpers',
    ['transform-react-remove-prop-types', { removeImport: true }],
  ],
});

export default [
  {
    input,
    output: {
      file: 'lib/daypicker.js',
      sourcemap: true,
      format: 'umd',
      name: 'DayPicker',
      globals: {
        react: 'React',
      },
    },
    external: ['react'],
    plugins: [
      babel(getBabelOptions()),
      sizeSnapshot(),
    ],
  },

  {
    input,
    output: {
      file: 'lib/daypicker.min.js',
      sourcemap: true,
      format: 'umd',
      name: 'DayPicker',
      globals: {
        react: 'React',
      },
    },
    external: ['react'],
    plugins: [
      babel(getBabelOptions()),
      uglify(),
    ],
  },
];
