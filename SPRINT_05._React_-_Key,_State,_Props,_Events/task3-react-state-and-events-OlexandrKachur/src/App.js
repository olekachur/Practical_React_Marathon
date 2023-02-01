import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      appData: "React Marathon",
    };
  }

  lowerCase = () => {
    this.setState((prev) => {
      return {
        appData: prev.appData.toLowerCase(),
      }
    });
  }

  render() {
    return <div onClick={this.lowerCase}>{this.state.appData}</div>
  }
}
