import * as webpack from 'webpack';

const base: webpack.Configuration = {
  mode: 'production',
  devtool: 'source-map',
  entry: './src/index.ts',
  output: {
    library: 'DayPicker',
    libraryTarget: 'umd'
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'date-fns': {
      root: 'DateFns',
      commonjs2: 'date-fns',
      commonjs: 'date-fns',
      amd: 'date-fns'
    }
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }]
  }
};

const minified = {
  ...base,
  output: {
    ...base.output,
    filename: 'index.min.js'
  }
};

const notMinified = {
  ...base,
  output: {
    ...base.output,
    filename: 'index.js'
  },
  optimization: {
    minimize: false
  }
};

export default [minified, notMinified];
