import React, { useState } from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import Subtask1 from './Subtask1';
import Subtask2 from './Subtask2';
import Subtask3 from './Subtask3';
import Subtask4 from './Subtask4';
import './App.css';

export default function App() {
  const [route, setRoute] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleCheckbox = (e) => {
    setIsChecked(e.target.checked)
    navigate('/subtask4',)
  }

  const oddNumber = (e) => {
    e.target.value % 2 !== 0 ? setRoute('/subtask3') : setRoute('/');
  }

  return (
    <div className="App">
      <h1>React Marathon</h1>
      <h2>The topic 'Routes'</h2>
      <Link to={route}>Show protected information if</Link>
      <span>&nbsp;</span>
      <input size="5" onChange={oddNumber}></input> is odd
      <div className="mainClass">
        Go to the component programmatically, by checking the box:{" "}
        <input type="checkbox" checked={isChecked} onChange={handleCheckbox}></input>
      </div>

      <Routes>
        <Route path='/subtask1' element={<Subtask1 />} />
        <Route path='/subtask1/:currId' element={<Subtask1 />} />
        <Route path='/subtask2' element={<Subtask2 />} />
        <Route path='/subtask3' element={<Subtask3 />} />
        <Route path='/subtask4' element={<Subtask4 />} />
      </Routes>
    </div>
  );
}
