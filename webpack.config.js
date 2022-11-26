// const { path } = require('browserify/lib/builtins');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = { 
  mode: process.env.NODE_ENV,
  entry: './client/index',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        }
      },
      {
        test: /\.s?css/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: 'index.html',
    }),
  ],
  devServer: {
    port: 8080,
    static: {
      directory: path.resolve(__dirname, 'build'),
      publicPath: './build'
    },
    proxy: {
      '/': {
        target: 'http://localhost:3000',
        // secure: true,
      },
    },
  },
};


