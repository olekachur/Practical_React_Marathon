import React, { useState } from "react";
import './App.css';
import Contacts from './contacts';
import Logo from "./Logo";

export const ContactContext = React.createContext();


function App() {
  const [contactInfo, setContactInfo] = useState(() => [
    { optionSelected: '', details: '', key: Date.now() }
  ]);

  return (
    <div className="grid-container">
      <div>
        <Contacts
          contactInfo={contactInfo}
          setContactInfo={setContactInfo}
        />
      </div>
      <div>
        <ContactContext.Provider value={contactInfo}>
          <Logo />
        </ContactContext.Provider>
      </div>
    </div>
  );
}

export default App;
