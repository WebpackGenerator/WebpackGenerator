import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';

import { updateOptionsActionCreator } from '../actions/actions';

// components
import Download from './Download';

const mapDispatchToProps = (dispatch) => {
  return {
    updateOptions: (options) => dispatch(updateOptionsActionCreator(options)),
  };
};

const FormInput = (props) => {

  const template = useSelector(state => state.webpack.template);

  const formChange = (e) => {
    const change = {};

    let value = e.target.value;
    if (e.target.type === 'checkbox') value = e.target.checked;

    change[e.target.id] = value;

    props.updateOptions(change);
  };

  return (
    <div className="formContainer">
      <form onChange={formChange}>
        {/* SET UP */}
        <div id="entryField">
          <label className="header">Setup</label>
          <br></br>
          <label>Entry file:</label>
          <input
            type="text"
            defaultValue={template.entry}
            placeholder="./src/index.js"
            name="entry"
            id="entry"
          ></input>
        </div>
        <div id="outputField">
          <div id="pathField">
            <label>Path:</label>
            <input
              type="text"
              defaultValue={template.output_folder}
              placeholder="dist"
              name="output_folder"
              id="output_folder"
            ></input>
          </div>
          <div id="filenameField">
            <label>Filename:</label>
            <input
              type="text"
              defaultValue={template.output_filename}
              placeholder="index.js"
              name="output_filename"
              id="output_filename"
            ></input>
          </div>
        </div>
        <div id="loadersField">
          <div id="react-select" name="type">
            <input
              type="checkbox"
              value="false"
              name="react"
              id="react"
            ></input>
            <label>React</label>
          </div>

          {/* DEV SERVER */}
          {/* <details>
          <summary>devServer</summary> */}
          <div id="devServer">
            <label className="header">devServer</label>
            <br></br>
            <div id="devServer" name="type">
              <input type="checkbox" value="false" id="devServer"></input>
              <label>Use devServer</label>
            </div>

            {/* dev server configs */}
            <div className={'indentedOptions ' + (template.devServer ? '' : 'dontShow')}>
              <div id="port" name="type">
                <label>Port:</label>
                <input
                  type="text"
                  defaultValue={template.proxyPort}
                  placeholder="8080"
                  name="proxyPort"
                  id="proxyPort"
                ></input>
              </div>
              
              <div id="proxy" name="type">
                <label>Proxy Path:</label>
                <input
                  type="text"
                  defaultValue={template.proxy_filepath}
                  placeholder="/"
                  name="proxy_filepath"
                  id="proxy_filepath"
                ></input>
                <br></br>
                <label>Target: </label>
                <label>http://localhost</label>
                <input
                  type="text"
                  defaultValue={template.proxy_target}
                  // defaultValue="'http://localhost'"
                  placeholder="3000"
                  name="proxy_target"
                  id="proxy_target"
                ></input>
                <br></br>
              </div>
            </div>

          </div>
          {/* </details> */}

          {/* STYLING */}
          <div id="style-select" name="type">
            <label className="header">Styling</label>
            <br></br>
            <input type="radio" id="css" name="css" value=""></input>
            <label>None</label>
            <br></br>
            <input type="radio" id="css" name="css" value="css"></input>
            <label>CSS</label>
            <br></br>
            <input type="radio" id="css" name="css" value="sass"></input>
            <label>SASS</label>
            <br></br>
          </div>

          {/* PLUGINS */}
          <div id="plugins">
            <label className="header">Plugins</label>
            <br></br>
            <div id="htmlplugin" name="type">
              <input
                type="checkbox"
                value="false"
                id="htmlWebpackPlugin"
              ></input>
              <label>Html Plugin</label>
              <br></br>
              
              <div className={'indentedOptions ' + (template.htmlWebpackPlugin ? '' : 'dontShow')}>
                <label>Title:</label>
                <input
                  type="text"
                  placeholder="Development"
                  name="htmlpluginTitle"
                  id="htmlpluginTitle"
                  defaultValue={template.htmlpluginTitle}
                ></input><br></br>
                <label>Template:</label>
                <input
                  type="text"
                  placeholder="index.html"
                  name="htmlpluginTemplate"
                  id="htmlpluginTemplate"
                  defaultValue={template.htmlpluginTemplate}
                ></input>
              </div>

            </div>
            <div id="miniCssExtractPlugin" name="type">
              <input
                type="checkbox"
                value="false"
                name="miniCssExtractPlugin"
                id="miniCssExtractPlugin"
              ></input>
              <label>Mini CSS Plugin</label>
            </div>
          </div>

          {/* LINTING */}
          <div id="linting">
            <label className="header">Linting</label>
            <br></br>
            <div id="eslint" name="type">
              <input type="checkbox" value="false" id="eslint"></input>
              <label>ESLint</label>
            </div>
            <div id="prettier" name="type">
              <input type="checkbox" value="false" id="prettier"></input>
              <label>Prettier</label>
            </div>
          </div>
        </div>
      </form>

      <Download />
    </div>
  );
};

export default connect(null, mapDispatchToProps)(FormInput);
