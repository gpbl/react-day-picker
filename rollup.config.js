import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';

const isProduction = process.env.NODE_ENV === 'production';

export default {
  input: './src/index.js',
  output: {
    file: `lib/daypicker${isProduction ? '.min' : ''}.js`,
    sourcemap: true,
    format: 'umd',
    name: 'DayPicker',
    globals: {
      react: 'React',
    },
  },
  external: ['react'],
  plugins: [
    babel({
      plugins: [
        'external-helpers',
        ['transform-react-remove-prop-types', { removeImport: true }],
      ],
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    isProduction ? uglify() : {},
  ],
};
