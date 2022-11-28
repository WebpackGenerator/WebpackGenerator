import React from 'react';
import { connect } from 'react-redux';

import { updateOptionsActionCreator } from '../actions/actions';

const mapDispatchToProps = (dispatch) => {
  return {
    updateOptions: (options) => dispatch(updateOptionsActionCreator(options)),
  };
};

const FormInput = (props) => {
  const formChange = (e) => {
    //for (let i = 0; i < e.target)
    const change = {};

    console.log(
      'UPDATING',
      e.target.id,
      ' TO:',
      e.target.value,
      'TYPE:',
      e.target.type
    );

    let value = e.target.value;
    if (e.target.type === 'checkbox') value = e.target.checked;

    change[e.target.id] = value;

    props.updateOptions(change);
  };

  return (
    <div className="formContainer">
      <form onChange={formChange}>
        <div id="entryField">
          <label className="header">Setup</label>
          <br></br>
          <label>Entry file:</label>
          <input
            type="text"
            // defaultValue="./src/index.js"
            placeholder="./src/index.js"
            name="entry"
            id="entry"
            // onChange={formChange}
          ></input>
        </div>
        <div id="outputField">
          <div id="pathField">
            <label>Path:</label>
            <input
              type="text"
              // defaultValue="dist"
              placeholder="dist"
              name="output_folder"
              id="output_folder"
              // onChange={(e) => handleSetPath(e)}
            ></input>
          </div>
          <div id="filenameField">
            <label>Filename:</label>
            <input
              type="text"
              // defaultValue="index.js"
              placeholder="index.js"
              name="output_filename"
              id="output_filename"
              // onChange={(e) => handleSetFileName(e)}
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
          {/* <div id="es6-select" name="type">
            <input
              type="checkbox"
              value='false'
              // onChange={handleSetIsEs6Active}
            ></input>
            <label>ES6+</label>
          </div> */}
          <div id="devServer">
            <label className="header">devServer</label>
            <br></br>
            <div id="port" name="type">
              <label>Port:</label>
              <input
                type="text"
                // defaultValue="8080"
                placeholder="8080"
                id="port"
                name="port_name"
                id="port_name"
              ></input>
            </div>
            <div id="static" name="type">
              <label>Static:</label>
              <input type="checkbox" value="false" id="static"></input>
            </div>
            <div id="proxy" name="type">
              <label>Proxy:</label>
              <br></br>
              <label>File Path:</label>
              <input
                type="text"
                // defaultValue="'/'"
                placeholder="'/'"
                name="proxyFilePath"
                id="proxyFilePath"
              ></input>
              <br></br>
              <label>Target: </label>
              <label>http://localhost</label>
              <input
                type="text"
                // defaultValue="'http://localhost'"
                placeholder="3000"
                name="proxyFilePath"
                id="proxyFilePath"
              ></input>
              <br></br>
            </div>
          </div>
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
            </div>
            <div id="minicssplugin" name="type">
              <input type="checkbox" value="false" id="minicssplugin"></input>
              <label>Mini CSS Plugin</label>
            </div>
            <div id="Copy WebPack Plugin" name="type">
              <input type="checkbox" value="false" id="minicssplugin"></input>
              <label>Copy Webpack Plugin</label>
            </div>
          </div>
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
    </div>
  );
};

export default connect(null, mapDispatchToProps)(FormInput);
