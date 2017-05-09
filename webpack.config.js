/* eslint-env node */

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  entry: {
    daypicker: './DayPicker.js',
    daypickerinput: './DayPickerInput.js',
  },
  output: {
    path: `${__dirname}/lib`,
    filename: `[name]${isProduction ? '.min' : ''}.js`,
    library: 'DayPicker',
    libraryTarget: 'umd',
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
  },
};
