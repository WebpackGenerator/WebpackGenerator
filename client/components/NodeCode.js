// import hooks and react
import React, { useEffect, useState } from 'react';

// codemirror
import CodeMirror from '@uiw/react-codemirror';
import { javascript, typescriptLanguage } from '@codemirror/lang-javascript';
import { okaidia } from '@uiw/codemirror-theme-okaidia';

// import components here

function NodeCode() {
  //framework dowloands
  // let express = true;
  // let react = false;
  // let react_dom = false;
  // let redux = false;

  //declare variables for optional dependancy installation
  let webpack = false;
  let babel = false;
  let typescript = false;
  let style_loader = false;
  let css = false;
  let sass = false;
  let eslint = false;
  let prettier = false;
  let htmlWebpackPlugin = false;
  let miniCssExtractPlugin = false;

  //loaders

  //plugins

  let boilerplate = `\
  npm i -D webpack ${webpack ? `webpack-cli webpack-dev-server` : ``} ${
    babel ? `babel-loader @babel/core @babel/preset-env` : ``
  } ${typescript ? `typescript ts-loader` : ``} ${
    css ? `css-loader style-loader` : ``
  } ${sass ? `css-loader sass-loader node-sass style-loader` : ``} ${
    eslint ? `eslint` : ``
  } ${prettier ? `prettier` : ``} ${
    htmlWebpackPlugin ? `html-webpack-plugin` : ``
  } ${miniCssExtractPlugin ? `mini-css-extract-plugin` : ``}`;

  // we will do our initial server calls here
  useEffect(() => {}, []);

  return (
    <div className="nodeCode">
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

export default NodeCode;
