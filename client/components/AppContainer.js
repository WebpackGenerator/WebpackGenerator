// import hooks and react
import React, { useEffect, useState } from 'react';

// import components here
import Questionnaire from './Questionnaire.js'
import WebpackCode from './WebpackCode.js'
import NodeCode from './NodeCode.js'

function AppContainer() {

 
  // we will do our initial server calls here
  useEffect(()=>{

  },[]);

  // this will contain all the logic for our components

  return (
    <div className='appContainer'>
      <div className='questionContainer'>
        <Questionnaire /> 
      </div>
      <div className='codeContainer'>
        <WebpackCode />
        <NodeCode />
      </div>
    </div>
  );
  
}

export default AppContainer;