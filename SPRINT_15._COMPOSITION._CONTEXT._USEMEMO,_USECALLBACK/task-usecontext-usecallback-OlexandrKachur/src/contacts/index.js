import React, { useCallback } from "react";
import stylesCenter from "./index.module.css";
import ContactItem from "./ContactItem";


const Contacts = ({ contactInfo, setContactInfo }) => {
  const handleAddDetails = () => {
    setContactInfo([
      ...contactInfo,
      { optionSelected: '', details: '', key: Date.now() }
    ]);
  };

  const handleChangeDetailsAndOptions = useCallback(
    (index, event) => {
      setContactInfo((prevData) => {
        prevData[index][event.target.name] = event.target.value;
        return [...prevData]
      });
    },
    [setContactInfo]
  );

  const handleRemoveField = useCallback(
    (index) => {
      setContactInfo((prev) => {
        prev.splice(index, 1);
        return [...prev];
      });
    },
    [setContactInfo]
  );

  return (
    <>
      <div className={stylesCenter.channels}>
        {contactInfo.map((element, index) => (
          <ContactItem
            optionSelected={element.optionSelected}
            details={element.details}
            key={element.key}
            index={index}
            onChange={handleChangeDetailsAndOptions}
            setInputFieldsAndOptions={setContactInfo}
            handleRemoveField={handleRemoveField}
          />
        ))}
      </div>
      <div>
        <button
          className={stylesCenter.addButton}
          data-testid="add-button"
          onClick={handleAddDetails}
        >
          <img src="plus.svg" alt="plus logo" />
          <span className={stylesCenter.addButtonText}>
            Додати канал зв'язку
          </span>
        </button>
      </div>
    </>
  );
};

export default Contacts;
