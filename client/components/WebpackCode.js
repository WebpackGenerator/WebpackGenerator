// react
import React, { useEffect } from "react";
// redux
//import { connect } from 'react-redux';  // NOT USING - USING useSelector instead.
import {useSelector, useDispatch} from 'react-redux'

// codemirror
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { okaidia } from '@uiw/codemirror-theme-okaidia';

// actions
import {saveWebpackCodeActionCreator} from '../actions/actions';

// import components here

// const mapStateToProps = state => {
//   console.log('STATE', state.webpack);
//   return state.webpack.template
// };


// IN WebpackCode add:
// add   const dispatch = useDispatch()
// use   dispatch(actions.saveWebpackCodeActionCreator(webpackString))
// do this to save webpack code content in state which we'll pull from here


function WebpackCode() {

  const template = useSelector(state => state.webpack.template);
  
  const dispatch = useDispatch();

  // on change of the template, save the state content
  useEffect(() => {
    // SAVE CODE TO STATE
    dispatch(saveWebpackCodeActionCreator(boilerplate))
  }, [template]) 

  // update everything when state changes
  // useEffect(()=> {
  //   console.log("TEST");
  // },)

  // console.log('TEMPLATE', template);

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
    template.react || template.css !== ""
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
      template.css !== ""
            ? `
      {
        ${template.css === "sass" ? `test: /\.s?css/` : `test: /\.css/`},
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'${template.css === "sass" ? `, 'sass-loader'` : ''}],
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
    </div>
  );
}


export default WebpackCode;
//export default connect(mapStateToProps, null)(WebpackCode);
