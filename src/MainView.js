import React, { Component } from "react";
import './App.css';

class MainView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  onChange = (event) => {
    this.setState({value: event.target.value});
  }

  sendData = () => {
    fetch("http://localhost:1447/api/subscribe?api_key=bonthoobonthoo123", {
      method: "post",
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        number: this.state.value
      }
    });
  };

  render() {
    return (
      <div className="MainView">
        <textarea className="TextInput" value={this.state.value} onChange={this.onChange}></textarea>
        <button className="Button" onClick={this.sendData}>subcrsibe</button>
      </div>
    );
  }
}

export default MainView;
