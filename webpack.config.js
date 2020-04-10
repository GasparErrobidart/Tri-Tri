const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseConfig = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      }
    ]
  }
}

const main = {
  ...baseConfig,
  entry: './src/index',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'tri-tri.js'
  },
}

const demo = {
  ...baseConfig,
  entry: './src/demo/main',
  output: {
    path: path.join(__dirname, '/dist/demo'),
    filename: 'main.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename : 'index.html',
      template: './src/demo/index.html'
    })
  ]
}

module.exports = [ main , demo ]
