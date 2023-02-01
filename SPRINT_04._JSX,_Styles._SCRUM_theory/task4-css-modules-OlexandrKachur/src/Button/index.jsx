import React from 'react';
import myModule from './index.module.css'

function Button() {  
  return (
    <button className={myModule.active}>
      Click Me
    </button>
  )
}

export default Button
