// import hooks and react
import React, { useEffect, useState } from 'react';

// codemirror
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { okaidia } from '@uiw/codemirror-theme-okaidia';

// import components here


function WebpackCode() {

  // variables
  let htmlWebpackPlugin = false;
  let entry = './src/index.js';
  let output_filename = 'bundle.js';
  let output_folder = 'dist';
  let react = false;
  let css = false;
  let scss = false;
  let proxy = false;
  let proxyPort = 8080;


  let boilerplate =`\
const path = require('path');
${(htmlWebpackPlugin)?`const HtmlWebpackPlugin = require('html-webpack-plugin');\n`:``}
module.exports = {
  mode: process.env.NODE_ENV,
  entry: '${entry}',
  output: {
    filename: '${output_filename}',
    path: path.resolve(__dirname, '${output_folder}'),
  },${ (react || css || scss)?`
  module: {
    rules: [${react?`
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        }
      },`:``}${(scss||css)?`
      {
        ${scss?`test: /\.s?css/`:`test: /\.css/`},
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'${scss?`, 'sass-loader'`:''}],
      },`:``}
    ],
  },`:``
  }${(htmlWebpackPlugin)?`
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: 'index.html',
    }),
  ],`:``
  }${(proxy)?`
  devServer: {
    port: ${proxyPort},
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
  },`:``}
};
`
  // on change callback, i dont think we need this?
  // const onChange = React.useCallback((value, viewUpdate) => {
  //   console.log('value:', value);
  // }, []);

  return (
    <div className='webpackCode'>
      <CodeMirror
        value={boilerplate}
        // height="75%"
        theme={okaidia}
        extensions={[javascript({ jsx: true })]}
        //onChange={onChange}
        readOnly='nocursor'
        basicSetup={{
          lineNumbers: false,
          foldGutter: false,
          highlightActiveLine: false
        }}
      />
    </div>
  );
  
}

export default WebpackCode;