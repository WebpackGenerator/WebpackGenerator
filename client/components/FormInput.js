import React, { useEffect, useState } from 'react';

const FormInput = () => {
  // const [entry, setEntry] = useState('');
  // const [path, setPath] = useState('');
  // const [filename, setFileName] = useState('');
  // const [isEs6Active, setIsEs6Active] = useState(false);
  // const [isReactActive, setIsReactActive] = useState(false);
  // const [noStyle, setNoStyle] = useState(false);
  // const [css, setCss] = useState(false);
  // const [sass, setSass] = useState(false);
  // const [htmlplugin, sethtmlplugin] = useState(false);
  // const [minicssplugin, setminicssplugin] = useState(false);
  // const [copywebpackplugin, setcopywebpackplugin] = useState(false);

  // const handleSetEntry = (event) => {
  //   setEntry(event.target.value);
  // };
  // const handleSetPath = (event) => {
  //   setPath(event.target.value);
  // };
  // const handleSetFileName = (event) => {
  //   setFileName(event.target.value);
  // };
  // const handleSetIsEs6Active = () => {
  //   setIsEs6Active(!isEs6Avtive);
  // };
  // const handleSetIsReactActive = () => {
  //   setIsReactActive(!isReactActive);
  // };
  // const handleSetNoStyle = () => {
  //   setNoStyle(!noStyle);
  // };
  // const handleSetCss = () => {
  //   setCss(!css);
  // };
  // const handleSetESass = () => {
  //   setSass(!sass);
  // };
  // const handlesethtmlplugin = () => {
  //   sethtmlplugin(!htmlplugin);
  // };
  // const handleminicsspluginn = () => {
  //   setminicssplugin(!minicssplugin);
  // };
  // const handlecopywebpackplugin = () => {
  //   setcopywebpackplugin(!copywebpackplugin);
  // };

  const formChange = (e) => {
    //for (let i = 0; i < e.target)
    const change = {}
    change[e.target.name] = e.target.value;
    console.log('update', change);

    /*
    htmlWebpackPlugin,
    entry,
    output_filename,
    output_folder,
    react,
    css,
    scss,
    typescript,
    proxy,
    proxyPort
    */
  }

  return (
    <div className="formContainer">
      <form onChange={formChange}>
        <div id="entryField">
          <label>Entry file:</label>
          <input
            type="text"
            value='./src/index.js'
            placeholder="./src/index.js"
            name='entry'
            // onChange={(e) => handleSetEntry(e)}
          ></input>
        </div>
        <div id="outputField">
          <div id="pathField">
            <label>Path:</label>
            <input
              type="text"
              value='dist'
              placeholder="dist"
              name="output_folder"
              // onChange={(e) => handleSetPath(e)}
            ></input>
          </div>
          <div id="filenameField">
            <label>Filename:</label>
            <input
              type="text"
              value="index.js"
              placeholder="index.js"
              name="output_filename"
              // onChange={(e) => handleSetFileName(e)}
            ></input>
          </div>
        </div>
        <div id="loadersField">
          <div id="react-select" name="type">
            <input type="checkbox" value='false' name='react'></input>
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
            <input type="radio" id="css" name="css" value='false'></input>
            <label>CSS</label>
            <br></br>
            <input type="radio" id="sass" name="scss" value='false'></input>
            <label>SASS</label>
            <br></br>
          </div>
          <div id="plugins">
            <label>Plugins</label>
            <br></br>
            <div id="htmlplugin" name="type">
              <input type="checkbox" value='false'></input>
              <label>Html Plugin</label>
            </div>
            <div id="minicssplugin" name="type">
              <input type="checkbox" value='false'></input>
              <label>Mini CSS Plugin</label>
            </div>
            <div
              id="Copy WebPack Plugin"
              name="type"
            >
              <input type="checkbox" value='false'></input>
              <label>Copy Webpack Plugin</label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormInput;
