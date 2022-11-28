// import hooks and react
import React, { useEffect, useState } from 'react';

// codemirror
import CodeMirror from '@uiw/react-codemirror';
import { javascript, typescriptLanguage } from '@codemirror/lang-javascript';
import { okaidia } from '@uiw/codemirror-theme-okaidia';

// import components here

function NodeCode() {
  const [copyItem, copySuccess] = useState(false);
  //framework dowloands
  // let express = true;
  // let react = false;
  // let react_dom = false;
  // let redux = false;

  //declare variables for optional dependancy installation
  let webpack = true;
  let babel = true;
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
        width="100%"
        theme={okaidia}
        extensions={[javascript({ jsx: true })]}
        //onChange={onChange}
        readOnly="nocursor"
        basicSetup={{
          lineWrapping: true,
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

export default NodeCode;
