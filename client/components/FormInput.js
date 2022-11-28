import React from 'react';
import { connect } from 'react-redux';

import {updateOptionsActionCreator} from '../actions/actions';

const mapDispatchToProps = (dispatch) => {
  return {
    updateOptions: (options) => dispatch(updateOptionsActionCreator(options))
  };
}

const FormInput = (props) => {

  const formChange = (e) => {
    //for (let i = 0; i < e.target)
    const change = {}

    console.log('UPDATING', e.target.id, " TO:", e.target.value, 'TYPE:', e.target.type);

    let value = e.target.value;
    if (e.target.type === 'checkbox') value = e.target.checked;

    change[e.target.id] = value;

    props.updateOptions(change);
  }



  return (
    <div className="formContainer">
      <form onChange={formChange}>
        <div id="entryField">
          <label>Entry file:</label>
          <input
            type="text"
            defaultValue='./src/index.js'
            placeholder="./src/index.js"
            name='entry'
            id='entry'
            // onChange={formChange}
          ></input>
        </div>
        <div id="outputField">
          <div id="pathField">
            <label>Path:</label>
            <input
              type="text"
              defaultValue='dist'
              placeholder="dist"
              name="output_folder"
              id='output_folder'
              // onChange={(e) => handleSetPath(e)}
            ></input>
          </div>
          <div id="filenameField">
            <label>Filename:</label>
            <input
              type="text"
              defaultValue="index.js"
              placeholder="index.js"
              name="output_filename"
              id='output_filename'
              // onChange={(e) => handleSetFileName(e)}
            ></input>
          </div>
        </div>
        <div id="loadersField">
          <div id="react-select" name="type">
            <input type="checkbox" value='false' name='react' id='react'></input>
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
          <div id="style-select" name="type">
            <label>Styling</label>
            <br></br>
            <input type="radio" id="css" name="css" value=''></input>
            <label>none</label>
            <br></br>
            <input type="radio" id="css" name="css" value='css'></input>
            <label>CSS</label>
            <br></br>
            <input type="radio" id="css" name="css" value='sass'></input>
            <label>SASS</label>
            <br></br>
          </div>
          <div id="plugins">
            <label>Plugins</label>
            <br></br>
            <div id="htmlplugin" name="type">
              <input type="checkbox" value='false' id='htmlWebpackPlugin'></input>
              <label>Html Plugin</label>
            </div>
            <div id="minicssplugin" name="type">
              <input type="checkbox" value='false' id='minicssplugin'></input>
              <label>Mini CSS Plugin</label>
            </div>
            <div id="Copy WebPack Plugin" name="type">
              <input type="checkbox" value='false' id='minicssplugin'></input>
              <label>Copy Webpack Plugin</label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(FormInput);
