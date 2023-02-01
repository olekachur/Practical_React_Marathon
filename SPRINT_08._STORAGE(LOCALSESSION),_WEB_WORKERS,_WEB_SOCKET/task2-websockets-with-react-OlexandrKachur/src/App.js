import { useEffect } from "react";
import { useState } from "react";
import "./App.css";

function App({ ws }) {
  const [userName, setUserName] = useState();
  const [userMessage, setUserMessage] = useState();
  const [chat, setChat] = useState();

  useEffect(() => {
    ws.onopen = () => console.log("connected");
    ws.onmessage = (message) => setChat((prev) => prev + `${message.data}\n`)
  })

  const sendHandler = () => {
    ws.send(`${userName}: ${userMessage}`)
  }

  return (
    <div className="App">
      <h1>Web Sockets</h1>
      <div>
        <textarea rows="30" cols="60" readOnly aria-label="chat" value={chat}/>
      </div>
      <input placeholder="Your nickname" size="11" value={userName}/>
      <input placeholder="Type your message" size="40" value={userMessage}/>
      <button onClick={sendHandler}>Send</button>
    </div>
  );
}

export default App;
