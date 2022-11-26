// import hooks and react
import React, { useEffect, useState } from 'react';

// codemirror
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { okaidia } from '@uiw/codemirror-theme-okaidia';

// import components here

function NodeCode() {

  let boilerplate =`\
  npm i -D webpack
  `

  // we will do our initial server calls here
  useEffect(()=>{

  },[]);

  return (
    <div className='nodeCode'>
      <CodeMirror
        value={boilerplate}
        // height="75%"
        theme={okaidia}
        extensions={[javascript({ jsx: true })]}
        //onChange={onChange}
        readOnly='nocursor'
        basicSetup={{
          lineNumbers: false,
          foldGutter: false,
          highlightActiveLine: false
        }}
      />
    </div>
  );
  
}

export default NodeCode;