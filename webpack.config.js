const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
  },
  target: 'node',
  externalsPresets: { node: true }, // in order to ignore built-in modules like path, fs, etc.
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  mode: process.env.NODE_ENV,
  resolve: {
    extensions: ['.js', '.jsx'],
    fallback: {
      fs: false,
    },
  },

  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
}
