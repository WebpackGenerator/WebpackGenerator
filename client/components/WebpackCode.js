// react
import React, { useEffect } from 'react';
// redux
//import { connect } from 'react-redux';  // NOT USING - USING useSelector instead.
import { useSelector, useDispatch } from 'react-redux';

// codemirror
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { okaidia } from '@uiw/codemirror-theme-okaidia';

// import components here

// const mapStateToProps = state => {
//   console.log('STATE', state.webpack);
//   return state.webpack.template
// };

function WebpackCode() {
  const template = useSelector((state) => state.webpack.template);

  let boilerplate = `\
const path = require('path');
${
  template.htmlWebpackPlugin
    ? `const HtmlWebpackPlugin = require('html-webpack-plugin');\n`
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
    template.htmlWebpackPlugin
      ? `
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: 'index.html',
    }),
  ],`
      : ``
  }${
    template.proxy
      ? `
  devServer: {
    port: ${template.proxyPort},
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
        value={boilerplate}
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
      <button onClick={() => navigator.clipboard.writeText(boilerplate)}>
        <svg
          color="white"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-clipboard"
          viewBox="0 0 16 16"
        >
          <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
          <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
        </svg>
      </button>
    </div>
  );
}

export default WebpackCode;
//export default connect(mapStateToProps, null)(WebpackCode);
