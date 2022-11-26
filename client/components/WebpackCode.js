// import hooks and react
import React, { useEffect, useState } from 'react';

// codemirror
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { okaidia } from '@uiw/codemirror-theme-okaidia';

// formater
const jsonFormatter = require('json-string-formatter');

 

// import components here

function WebpackCode() {
  // variables
  let htmlWebpackPlugin = false;
  let entry = './src/index.js';
  let output_filename = 'bundle.js';
  let output_folder = 'dist';
  let react = true;
  let css = false;
  let scss = false;
  let typescript = false;
  let proxy = false;
  let proxyPort = 8080;

  const code = {
    requre: [`const path = require('path');`],
    mode: [`mode: process.env.NODE_ENV,`],
    entry: [],
    output: [],
    module: []
  }

  const buildCode = () => {
    let requirements = ''
    let content = '';
    console.log('code:', code);
    console.log('code.require', Array.isArray(code.requre))

    // adds requirements
    for (let i = 0; i < code.requre.length; i++)  {
      requirements += code.requre[i] + '\n';
    }
    requirements += '\n';
    // start content
    content += '{\n'

    for (let i = 0; i < code.mode.length; i++)  {
      content += code.mode[i] + '\n';
    }

    // end obj
    content += '}'

    //console.log(JSON.stringify(JSON.parse(output), null, 2))
    console.log(output);

    // build output
    let output;
    output = requirements;
    output += 'module.exports ='
    output += jsonFormatter.format(content);

    return output;
  }



  let boilerplate = `\
const path = require('path');
${
  htmlWebpackPlugin
    ? `const HtmlWebpackPlugin = require('html-webpack-plugin');\n`
    : ``
}
module.exports = {
  mode: process.env.NODE_ENV,
  entry: '${entry}',
  output: {
    filename: '${output_filename}',
    path: path.resolve(__dirname, '${output_folder}'),
  },${
    react || css || scss
      ? `
  module: {
    rules: [${
      react
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
          scss || css
            ? `
      {
        ${scss ? `test: /\.s?css/` : `test: /\.css/`},
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'${scss ? `, 'sass-loader'` : ''}],
      },`
            : ``
        }
    ],
  },`
      : ``
  }${
    htmlWebpackPlugin
      ? `
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: 'index.html',
    }),
  ],`
      : ``
  }${
    proxy
      ? `
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
  },`
      : ``
  }
};
`;
  // on change callback, i dont think we need this?
  // const onChange = React.useCallback((value, viewUpdate) => {
  //   console.log('value:', value);
  // }, []);

  return (
    <div className="webpackCode">
      <CodeMirror
        value={buildCode()}
        // height="75%"
        theme={okaidia}
        extensions={[javascript({ jsx: true })]}
        //onChange={onChange}
        readOnly="nocursor"
        basicSetup={{
          lineNumbers: false,
          foldGutter: false,
          highlightActiveLine: false,
        }}
      />
    </div>
  );
}

export default WebpackCode;
