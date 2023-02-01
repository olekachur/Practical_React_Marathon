import { useState, useEffect } from 'react';
import './App.css';

// export default function App() {
//   const [appData, setAppData] = useState(localStorage.getItem("appData") || "");

//   useEffect(() => {
//     localStorage.setItem("appData", appData);
//   }, [appData]);

//   return (
//     <div>
//       React Marathon, appData: <input size='5' defaultValue={appData}></input>
//     </div>
//   );
// }

export default function App() {  
  const [appData, setAppData] = useState("");

  useEffect(() => {
    if(!localStorage.getItem('appData')) {
      localStorage.setItem('appData', appData)
    }
  }, []);
  useEffect(() => setAppData(localStorage.getItem('appData')), []);

  return (
    <div>
      React Marathon, appData: <input size='5' defaultValue={appData}></input>
    </div>
  );
}
