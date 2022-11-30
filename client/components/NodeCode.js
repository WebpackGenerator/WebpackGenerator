// import hooks and react
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// codemirror
import CodeMirror from '@uiw/react-codemirror';
import { javascript, typescriptLanguage } from '@codemirror/lang-javascript';
import { okaidia } from '@uiw/codemirror-theme-okaidia';

// import components here
import CopyButton from './CopyButton';

function NodeCode() {

  const template = useSelector((state) => state.webpack.template);

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

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(saveWebpackCodeActionCreator(boilerplate))
  // }, [template]) 


  let boilerplate = `\
  npm i -D webpack ${
    template.webpack ? `webpack-cli webpack-dev-server` : ``
  } ${template.react ? `babel-loader @babel/core @babel/preset-env` : ``} ${
    template.typescript ? `typescript ts-loader` : ``
  } ${template.css ? `css-loader style-loader` : ``} ${
    template.sass ? `css-loader sass-loader node-sass style-loader` : ``
  } ${template.eslint ? `eslint` : ``} ${template.prettier ? `prettier` : ``} ${
    template.htmlWebpackPlugin ? `html-webpack-plugin` : ``
  } ${template.miniCssExtractPlugin ? `mini-css-extract-plugin` : ``}`;

  // we will do our initial server calls here
  useEffect(() => {}, []);

  return (
    <div className="nodeCode">
      <CodeMirror
        value={boilerplate}
        // height="75%"
        width="100%"
        theme={okaidia}
        extensions={[javascript({ jsx: true })]}
        readOnly="nocursor"
        basicSetup={{
          lineWrapping: true,
          lineNumbers: false,
          foldGutter: false,
          highlightActiveLine: false,
        }}
      />
      <CopyButton toCopy={boilerplate}/>
    </div>
  );
}

export default NodeCode;
