import React, { useContext } from "react";
import { ContactContext } from './App';

function ChannelStatistics() {
  // NOTE: use Context to get info about entered contacts
  const contactInfo = useContext(ContactContext);
  const lastChannelName = contactInfo[contactInfo.length - 1].optionSelected;

  return (
    <p data-testid="statistics">
      Count of channels: {contactInfo.length}<br />
      {lastChannelName && `your last channel is: ${lastChannelName}`}
    </p>
  )
}

export default ChannelStatistics;
