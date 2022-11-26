// import hooks and react
import React, { useEffect, useState } from 'react';

import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { okaidia } from '@uiw/codemirror-theme-okaidia';

// import components here


function WebpackCode() {

  const onChange = React.useCallback((value, viewUpdate) => {
    console.log('value:', value);
  }, []);
  return (
    <CodeMirror
      value="console.log('hello world!');"
      height="75%"
      theme={okaidia}
      extensions={[javascript({ jsx: true })]}
      onChange={onChange}
      readOnly='nocursor'
    />
  );
  
}

export default WebpackCode;