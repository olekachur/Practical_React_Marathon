import React from "react";
import myModule from './index.module.css'

function Input() {
  return <input type="text" className={myModule.active} placeholder="your text" />;
}

export default Input;
