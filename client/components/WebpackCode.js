// import hooks and react
import React, { useEffect, useState } from 'react';


// import components here


function WebpackCode() {

  const webpackObj = {
      mode: process.env.NODE_ENV,
      entry: './client/index',
      output: {
        filename: 'bundle.js',
        path: "path.resolve(__dirname, 'build')",
      },
  }

  // we will do our initial server calls here
  useEffect(()=>{

  },[]);

  return (
    <div className='webpackCode'>
      <textarea readonly="readonly">{JSON.stringify(webpackObj, null, 2)}</textarea>
    </div>
  );
  
}

export default WebpackCode;