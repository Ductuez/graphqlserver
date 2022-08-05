const path = require('path')

module.exports = {
  entry: './index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index_bundle.js',
  },
  target: 'node',
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
