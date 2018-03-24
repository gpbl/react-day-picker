import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import uglify from 'rollup-plugin-uglify';

const getUMDConfig = ({ env, file }) => {
  const config = {
    input: './src/index.js',
    output: {
      file,
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
        'process.env.NODE_ENV': JSON.stringify(env),
      }),
    ],
  };

  if (env === 'development') {
    config.plugins.push(sizeSnapshot());
  }

  if (env === 'production') {
    config.plugins.push(uglify());
  }

  return config;
};

export default [
  getUMDConfig({ env: 'development', file: 'lib/daypicker.js' }),
  getUMDConfig({ env: 'production', file: 'lib/daypicker.min.js' }),
];
