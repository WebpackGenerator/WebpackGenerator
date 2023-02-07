// react
import React, { useState, useEffect } from 'react';
// redux
//import { connect } from 'react-redux';  // NOT USING - USING useSelector instead.
import { useSelector, useDispatch } from 'react-redux';

// codemirror
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { okaidia } from '@uiw/codemirror-theme-okaidia';

// actions
import {saveWebpackCodeActionCreator} from '../actions/actions';

// import components here
import CopyButton from './CopyButton';

const WebpackCode = () => {

  const template = useSelector(state => state.webpack.template);
  
  const dispatch = useDispatch();

  // on change of the template, save the state content
  useEffect(() => {
    dispatch(saveWebpackCodeActionCreator(boilerplate))
  }, [template]) 

  let boilerplate = `\
const path = require('path');
${
  template.htmlWebpackPlugin
    ? `const HtmlWebpackPlugin = require('html-webpack-plugin');\n`
    : ``
}${
  template.miniCssExtractPlugin
    ? `const MiniCssExtractPlugin = require('mini-css-extract-plugin');\n`
    : ``
}${
  template.copyWebpackPlugin
    ? `const CopyPlugin = require('copy-webpack-plugin');\n`
    : ``
}
module.exports = {
  mode: process.env.NODE_ENV,
  entry: '${template.entry}',
  output: {
    filename: '${template.output_filename}',
    path: path.resolve(__dirname, '${template.output_folder}'),
  },${
    template.react || template.css !== ''
      ? `
  module: {
    rules: [${
      template.react
        ? `
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        }
      },`
        : ``
    }${
          template.css !== ''
            ? `
      {
        ${template.css === 'sass' ? `test: /\.s?css/` : `test: /\.css/`},
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'${
          template.css === 'sass' ? `, 'sass-loader'` : ''
        }],
      },`
            : ``
        }
    ],
  },`
      : ``
  }${
    template.htmlWebpackPlugin || template.miniCssExtractPlugin
      ? `
  plugins: [ ${template.htmlWebpackPlugin ? `    
    new HtmlWebpackPlugin({
      title: '${template.htmlpluginTitle}',
      template: '${template.htmlpluginTemplate}'
    }),`: ``}${
      template.miniCssExtractPlugin? `
    new MiniCssExtractPlugin()`: ``
    }
  ]`: ``
  }${
    template.devServer
      ? `
  devServer: {
    port: ${template.proxyPort},
    static: {
      directory: path.resolve(__dirname, '${template.output_folder}'),
      publicPath: './${template.output_folder}'
    },
    proxy: {
      '${template.proxy_filepath}': {
        target: 'http://localhost:${template.proxy_target}',
      },
    },
  },`
      : ``
  }
};
`;

  return (
    <div className="webpackCode">
      <CodeMirror
        value={boilerplate}
        theme={okaidia}
        extensions={[javascript({ jsx: true })]}
        readOnly="nocursor"
        basicSetup={{
          lineNumbers: false,
          foldGutter: false,
          highlightActiveLine: false,
        }}
      />
      <CopyButton toCopy={boilerplate}/>
    </div>
  );
}

export default WebpackCode;