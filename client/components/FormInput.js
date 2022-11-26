import React, { useEffect, useState } from 'react';

const FormInput = () => {
  const [entry, setEntry] = useState('');
  const [path, setPath] = useState('');
  const [filename, setFileName] = useState('');
  const [isEs6Active, setIsEs6Active] = useState(false);
  const [isReactActive, setIsReactActive] = useState(false);
  const [noStyle, setNoStyle] = useState(false);
  const [css, setCss] = useState(false);
  const [sass, setSass] = useState(false);
  const [htmlplugin, sethtmlplugin] = useState(false);
  const [minicssplugin, setminicssplugin] = useState(false);
  const [copywebpackplugin, setcopywebpackplugin] = useState(false);

  const handleSetEntry = (event) => {
    setEntry(event.target.value);
  };
  const handleSetPath = (event) => {
    setPath(event.target.value);
  };
  const handleSetFileName = (event) => {
    setFileName(event.target.value);
  };
  const handleSetIsEs6Active = () => {
    setIsEs6Active(!isEs6Avtive);
  };
  const handleSetIsReactActive = () => {
    setIsReactActive(!isReactActive);
  };
  const handleSetNoStyle = () => {
    setNoStyle(!noStyle);
  };
  const handleSetCss = () => {
    setCss(!css);
  };
  const handleSetESass = () => {
    setSass(!sass);
  };
  const handlesethtmlplugin = () => {
    sethtmlplugin(!htmlplugin);
  };
  const handleminicsspluginn = () => {
    setminicssplugin(!minicssplugin);
  };
  const handlecopywebpackplugin = () => {
    setcopywebpackplugin(!copywebpackplugin);
  };

  return (
    <div className="formContainer">
      <div id="entryField">
        <label>Entry file:</label>
        <input
          type="text"
          value={entry}
          placeholder="./src/index.js"
          onChange={(e) => handleSetEntry(e)}
        ></input>
      </div>
      <div id="outputField">
        <div id="pathField">
          <label>Path:</label>
          <input
            type="text"
            value={path}
            placeholder="dist"
            onChange={(e) => handleSetPath(e)}
          ></input>
        </div>
        <div id="filenameField">
          <label>Filename:</label>
          <input
            type="text"
            value={filename}
            placeholder="index.js"
            onChange={(e) => handleSetFileName(e)}
          ></input>
        </div>
      </div>
      <div id="loadersField">
        <div id="react-select" name="type" onChange={handleSetIsReactActive}>
          <input type="checkbox" value={isReactActive}></input>
          <label>React</label>
        </div>
        <div id="es6-select" name="type" onChange={handleSetIsEs6Active}>
          <input
            type="checkbox"
            value={isEs6Active}
            // onChange={handleSetIsEs6Active}
          ></input>
          <label>ES6+</label>
        </div>
        <div id="style-select" name="type">
          <label>Styling</label>
          <br></br>
          <input type="radio" id="css" name="styling" value={css}></input>
          <label>CSS</label>
          <br></br>
          <input type="radio" id="sass" name="styling" value={sass}></input>
          <label>SASS</label>
          <br></br>
        </div>
        <div id="plugins">
          <label>Plugins</label>
          <br></br>
          <div id="htmlplugin" name="type" onChange={handlesethtmlplugin}>
            <input type="checkbox" value={htmlplugin}></input>
            <label>Html Plugin</label>
          </div>
          <div id="minicssplugin" name="type" onChange={handleminicsspluginn}>
            <input type="checkbox" value={minicssplugin}></input>
            <label>Mini CSS Plugin</label>
          </div>
          <div
            id="Copy WebPack Plugin"
            name="type"
            onChange={handlecopywebpackplugin}
          >
            <input type="checkbox" value={copywebpackplugin}></input>
            <label>Copy Webpack Plugin</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormInput;
