import React, {Component, useState} from "react";
import "./../styles/App.css";
import { useState } from 'react';
function App() {

  const [getFlag,setFlag] = useState(false);

  const onClickHandler=()=>{
    setFlag(true);
  }

  return (
    <div id="main">
       <button id="click" onClick={onClickHandler}>Show</button>
     {getFlag && <p id="para"> Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
    </div>
  );
}


export default App;
