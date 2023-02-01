import React, { useState } from "react";
import './App.css';

export default function App() {
  const [value, clickHandler] = useState("React Marathon");


  return <div onClick={() => clickHandler(value.toLowerCase())}> {value} </div>;
}

