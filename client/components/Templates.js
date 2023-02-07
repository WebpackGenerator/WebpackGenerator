// import react
import React from "react";
import { useState, useEffect } from "react";

import {useSelector} from 'react-redux'
import { saveAs } from 'file-saver';
import JSZip from 'JSZip';

  // const projectName = useSelector(state => state.webpack.projectName);
  // const template = useSelector(state => state.webpack.template);
  // const webpackString = useSelector(state => state.webpack.webpack);
  // const npmString = useSelector(state => state.webpack.npm);



// Root funtional component
const Templates = ({ userLoggedIn }) => {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    fetch(`templates/${userLoggedIn}`)
    .then((res) => res.json())
    .then(result => {
      const temps = [];
      result.forEach((el, i) => {
        temps.push(el)
      })
      setTemplates(temps);
    })
  }, [])

  // const download = () => {

  //   const zip = new JSZip();


  //   const projectFolder = zip.folder(projectName);
  //   projectFolder.file("webpack.config.js", webpackString);

  //   let entryPath;
  //   const path = template.entry.split('/');

  //   if (path.length > 1) {
  //     for (let i = 0; i < path.length-1; i++) {
  //       if (i === 0) entryPath = projectFolder.folder(path[i]);
  //       else entryPath = entryPath.folder(path[i]);
  //     }
  //     entryPath.file(path[path.length-1], '');
  //   }
  //   else projectFolder.file(path, '');
    
  //   zip.generateAsync({type:"blob"}).then(function(content) {
  //       // saveAs from FileSaver.js
  //       saveAs(content, "webpack.zip");
  //   });
  // }


  const display = templates.map((el, i) => {
    return (<div className="saved-template" key={i}>{el.title}<button>Download</button></div>)
  })

  return (
    <div className="saved-templates">
      <div style={{fontSize:"2rem"}}>
        Templates
      </div>
      <div >
        {display}
      </div>
    </div>
  );
}

export default Templates;
