import React, { useEffect, useState } from "react";
import {useSelector} from 'react-redux'

// saving imports
import { saveAs } from 'file-saver';
import JSZip from 'JSZip';

//import files

const Download = ({ userLoggedIn }) => {

  const [ templateTitle, setTemplateTitle ] = useState('');

  const projectName = useSelector(state => state.webpack.projectName);
  const template = useSelector(state => state.webpack.template);
  const webpackString = useSelector(state => state.webpack.webpack);
  const npmString = useSelector(state => state.webpack.npm);

  const download = () => {
    const zip = new JSZip();

    const projectFolder = zip.folder(projectName);
    projectFolder.file("webpack.config.js", webpackString);

    let entryPath;
    const path = template.entry.split('/');

    if (path.length > 1) {
      for (let i = 0; i < path.length-1; i++) {
        if (i === 0) entryPath = projectFolder.folder(path[i]);
        else entryPath = entryPath.folder(path[i]);
      }
      entryPath.file(path[path.length-1], '');
    }
    else projectFolder.file(path, '');
    
    zip.generateAsync({type:"blob"}).then(function(content) {
        // saveAs from FileSaver.js
        saveAs(content, "webpack.zip");
    });
  }

  const handleTitleNameChange = (e) => {
    setTemplateTitle(e.target.value);
  }

  const save = () => {
    // console.log(webpackString)
    //console.log(projectName);
    // console.log(npmString);
    const data = {
      username: userLoggedIn,
      title: templateTitle,
      template: webpackString,
      npmCommand: npmString
    };

    fetch("/templates", {
      method: 'POST',
      headers: { 'Content-Type': 'Application/JSON' },
      body: JSON.stringify(data),
    })
    .then((res) => res.json())
    .then(result => console.log(result))
  }
  return (
    <div>
      <button className="download" onClick={download}>
        DOWNLOAD
      </button>
      <button onClick= {save}>Save</button> <span><input onChange={(e) => handleTitleNameChange(e)} placeholder="template name..."></input></span>
    </div>
  );
};

// steps to do

// IN WebpackCode add:
// add   const dispatch = useDispatch()
// use   dispatch(actions.saveWebpackCodeActionCreator(webpackString))
// do this to save webpack code content in state which we'll pull from here


export default Download;
