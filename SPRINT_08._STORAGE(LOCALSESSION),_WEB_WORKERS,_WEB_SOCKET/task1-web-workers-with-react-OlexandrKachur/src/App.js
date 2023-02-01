import { useState, useEffect } from "react";
import "./App.css";

//Note: please, do dot change placeholder and data-testid attributes
const worker = new Worker("worker.js");

function App() {
  const [result, setResult] = useState();
  const [input, setInput] = useState(0);

  useEffect(() => {
    worker.onmessage = event => {
      setResult(`Result: ${event.data}`);
    }
  })

  const calcHandler = () => {
    setResult("Calculating...");
    worker.postMessage({ data: input });
  }

  return (
    <div className="app">
      <h1>Fibonacci 🌀</h1>
      <input type="number" placeholder="Insert a number"
        onChange={e => setInput(e.target.value)}
      />
      <button onClick={calcHandler}>Calculate</button>
      <div className="result" data-testid="result">
        {result}
      </div>
    </div>
  );
}

export default App;
